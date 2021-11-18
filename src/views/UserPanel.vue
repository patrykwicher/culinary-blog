<template lang="html">
  <div class="container">
    <div class="user-container">
      <div class="title">
        Add new post!
      </div>
      <form @submit.prevent>
        <div class="post-content">
          <textarea id="title-textarea" v-model.trim="post.title" name="title" placeholder="Post title..." />
          <textarea id="post-content" v-model.trim="post.content" name="post-content" placeholder="Write a post!" />
          <div class="img-container">
            <label for="choose-image">Add image: </label>
            <input id="choose-image" type="file" name="post-img" accept="image/*" ref="image-input" @change="getImage" required>
          </div>
          <div class="select-class">
            <label for="dish-type">Choose dish type: </label>
            <select id="dish-type" @change="selectedDishType($event)" required>
              <option value="" disabled selected>Choose type of a dish</option>
              <option value="Main dish">Main dish</option>
              <option value="Salad">Salad</option>
              <option value="Soup">Soup</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
        </div>
        <button name="button" @click="createPost()" :disabled="post.content && post.title && post.dishType && post.imageData === ''">Publish</button>
      </form>
    </div>
    <div class="posts-container">
      <div class="post" v-for="(post, index) in getUsersPostsWithProperDataFormat" :key="index">
        <div class="informations-about">
          <p class="post-title">{{ post.postTitle }}</p>
          <p class="user-nickname">By {{ post.userNickname }}</p>
          <p class="date">Published on: {{ post.date }}</p>
        </div>
        <div class="fetched-post">
          <img :src="post.imageUrl" alt="XD">
          <p class="dish-type"> {{ post.dishType }} </p>
          <p> {{ post.postContent }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        imageData: null,
        dishType: ''
      },
    }
  },
  methods: {
    createPost() {
      this.$store.dispatch('createPost', this.post);
      this.post.title = '';
      this.post.content = '';
    },
    getImage(event) {
      this.post.imageData = event.target.files[0];
    },
    selectedDishType(event) {
      this.post.dishType = event.target.value;
    }
  },
  computed: {
    getUsersProfile() {
      return this.$store.state.usersProfile;
    },
    getUsersPostsWithProperDataFormat() {
      return this.$store.getters.usersPostsWithProperDateFormat;
    },
  },
}
</script>

<style lang="scss" scoped>
$peas-color: #90C041;
$date-color: #868686;
$border-bottom-color: #CCCCCC;
$hover-green-color: #6B9428;
$blue-color: #E5F5F7;

.container {
    display: flex;
    font-family: "Work Sans", sans-serif;
    margin: 0 12em 0 12em;

    .user-container {
        display: flex;
        flex-direction: column;
        padding-top: 1%;
        width: 40%;
        height: 100%;
        background-color: $blue-color;
        border-radius: 5px;
        padding: 2%;

        .title {
            font-size: 1.5em;
            font-weight: bold;
            font-weight: 300;
            font-size: 2.5em;
            margin-bottom: 2%;
        }

        .user-email {
            font-size: 1em;
            align-self: center;
            margin: 5% 0 15%;
        }

        .post-content {
            .select-class {
              margin: 2% 0 2% 0;
            }

            .img-container {
              margin-top: 3%;

              input {
                margin-top: 1%;
              }
            }

            #title-textarea {
                border: 1px solid $border-bottom-color;
                width: 100%;
                height: 2vw;
                box-sizing: border-box;
                margin-bottom: 2%;
                padding: 2%;
                resize: none;
            }

            #post-content {
                border: 1px solid $border-bottom-color;
                width: 100%;
                height: 35vh;
                box-sizing: border-box;
                padding: 3%;
                resize: none;
            }

            .select-class {
              margin-top: 3%;

              select {
                border: none;
                padding: 1%;
              }
            }
        }

        button {
            padding: 5%;
            width: 100%;
            background-color: white;
            border: 1px solid $border-bottom-color;
            margin-top: 2%;
            cursor: pointer;

            &:hover {
                background-color: $peas-color;
                transition: background-color 0.3s ease;
            }
        }
    }

    .posts-container {
        margin-left: 2%;
        width: 100%;

        .post {
          border-bottom: 2px dashed $peas-color;
          margin-left: 3%;
          margin-bottom: 5%;

            .informations-about {
                .post-title {
                  font-size: 3em;
                  font-weight: 300;
                  margin: 0 0;
                }

                .user-nickname {
                  font-size: 1.5em;
                  margin: 2% 0 0 0;
                }

                .date {
                  margin-top: 0;
                  color: $date-color;
                  border-bottom: 1px solid $border-bottom-color;
                  padding-bottom: 1%;
                }
            }

            .fetched-post {
                // margin: 0 3%;

                :first-child {
                    text-align: center;
                    font-size: 1.5em;
                    font-weight: bold;
                    margin-top: 0;
                }

                img {
                  width: 100%;
                  height: 100%;
                }

                .dish-type {
                  color: $hover-green-color;
                  margin-top: 0;
                  font-size: 1.2em;
                }

                :last-child {
                  // pozwala na new-line, spacje, etc.
                  white-space: pre-wrap;
                }
            }
        }
    }
}

@media (max-width: 360px) {
  .container {
    margin: 0;
    display: block;

    .user-container {
      width: 96%;
      border-bottom: 2px solid $border-bottom-color;
      margin-bottom: 15%;

      .title {
        font-size: 1.5em;
        text-align: center;
      }

      .post-content {
        #title-textarea {
          padding-top: 3%;
          height: 11vw;
        }

        .select-class {
          label {
            display: block;
            margin-bottom: 1%;
          }
        }
      }
    }

      .posts-container {
        margin-left: 0;

        .post {
          margin-left: 0;
          margin-bottom: 10%;

          .informations-about {
            .post-title {
              font-size: 1.9em;
              font-weight: 400;
            }

            .user-nickname {
              font-size: 1.2em;
              margin: 0 0 1% 0;
            }
          }

          .fetched-post {
            .dish-type {
              font-size: 1em;
              margin-bottom: 3%;
            }

            :last-child {
              font-size: 1em;
              margin-top: 0;
            }
          }
        }
      }
    }
  }

@media (min-width: 361px) {
  .container {
    margin: 0;
    display: block;

    .user-container {
      width: 96%;
      border-bottom: 2px solid $border-bottom-color;
      margin-bottom: 15%;
      margin-left: 0;

      .title {
        font-size: 1.8em;
        text-align: center;
      }

      .post-content {
        #title-textarea {
          padding-top: 3%;
          height: 11vw;
        }

        .select-class {
          label {
            display: block;
            margin-bottom: 1%;
          }
        }
      }
    }

    .posts-container {
      margin-left: 0;

      .post {
        margin-left: 0;
        margin-bottom: 10%;

        .informations-about {
          .post-title {
            font-size: 1.9em;
            font-weight: 400;
          }

          .user-nickname {
            font-size: 1.2em;
            margin: 0 0 1% 0;
          }
        }

        .fetched-post {
          .dish-type {
            font-size: 1em;
            margin-bottom: 3%;
          }

          :last-child {
            font-size: 1em;
            margin-top: 0;
          }
        }
      }
    }
  }
}

@media (min-width: 414px) {
  .container {
    .user-container {
      .title {
        font-size: 2em;
        font-weight: 400;
      }

      .post-content {
        #title-textarea {
          height: 10vw;
          padding-top: 3%;
        }

        #post-content {
          height: 60vw;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    .user-container {
      margin-bottom: 5%;

      :last-child {
        text-align: center;
      }

      .post-content {
        width: 100%;

        #title-textarea {
          height: 6vw;
          padding-top: 2%;
        }

        #post-content {
          height: 30vw;
          padding: 2%;
        }

        .img-container {
          margin-top: 0;
          font-size: 1.1em;

          input {
            font-size: 0.8em;
          }
        }

        .select-class {
          margin-top: 1%;
          font-size: 1.1em;

          select {
            font-size: 0.8em;
          }
        }
      }

      button {
        width: 50%;
        padding: 2%;
        font-size: 1.1em;
        margin-top: 0;
      }
    }

    .posts-container {
      .post {
        margin-bottom: 6%;

        .informations-about {
          .post-title {
            font-size: 2.5em;
            margin-bottom: 1%;
          }

          .user-nickname {
            font-size: 1.5em;
          }

          .date {
            font-size: 1em;
          }
        }

        .fetched-post {
          .dish-type {
            font-size: 1.4em;
          }

          :last-child {
            font-size: 1.1em;
            margin-bottom: 2%;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .container {
    .posts-container {
      .post {
        .fetched-post {
          .dish-type {
            margin-bottom: 2%;
          }
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .container {
    display: flex;
    margin: 0 6em;

    .user-container {
      width: 50%;
      margin-right: 2%;

      .post-content {
        #title-textarea {
          height: 3vw;
          padding-top: 3%;
        }

        #post-content {
          margin-bottom: 5%;
        }

        .img-container {
          font-size: 1.1em;
          margin-bottom: 5%;
        }

        .select-class {
          label {
            margin-bottom: 2%;
          }
        }
      }

      button {
        width: 100%;
        margin-top: 5%;
        padding: 5%;
      }
    }

    .posts-container {
      .post {
        .informations-about {
          .post-title {
            font-size: 2.1em;
            margin-bottom: 0.5%;
          }

          .user-nickname {
            font-size: 1.3em;
            margin-bottom: 0.8%;
          }
        }

        .fetched-post {
          .dish-type {
            font-size: 1.2em;
          }

          :last-child {
            font-size: 1em;
          }
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .container {
    .user-container {
      .title {
        font-size: 2em;
        margin-bottom: 3%;
      }

      .post-content {
        #title-textarea {
          height: 2.7vw;
          padding-top: 2.5%;
          font-size: 1.3em;
        }

        #post-content {
          margin-bottom: 5%;
          font-size: 1.3em;
        }

        .img-container {
          font-size: 1.1em;
          margin-bottom: 5%;
        }

        .select-class {
          font-size: 1.1em;

          label {
            margin-bottom: 2%;
          }
        }
      }

      button {
        width: 100%;
        margin-top: 5%;
        padding: 5%;
        font-size: 1.5em;
      }
    }

    .posts-container {
      .post {
        .informations-about {
          .post-title {
            font-size: 2.4em;
          }

          .user-nickname {
            font-size: 1.2em;
            margin-bottom: 0.8%;
          }

          .date {
            font-size: 1.1em;
          }
        }

        .fetched-post {
          .dish-type {
            font-size: 1.4em;
          }

          :last-child {
            font-size: 1.1em;
          }
        }
      }
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .user-container {
      .title {
        font-size: 2.8em;
        margin-bottom: 3%;
      }

      .post-content {
        #title-textarea {
          height: 3vw;
          padding-top: 3.6%;
          font-size: 1.6em;
        }

        #post-content {
          margin-bottom: 5%;
          font-size: 1.6em;
        }

        .img-container {
          font-size: 1.6em;
          margin-bottom: 5%;
        }

        .select-class {
          font-size: 1.6em;

          label {
            margin-bottom: 2%;
          }
        }
      }

      button {
        width: 100%;
        margin-top: 5%;
        padding: 6%;
        font-size: 1.6em;
      }
    }

    .posts-container {
      .post {
        .informations-about {
          .post-title {
            font-size: 3em;
          }

          .user-nickname {
            font-size: 1.6em;
            margin-bottom: 0.8%;
          }

          .date {
            font-size: 1.4em;
          }
        }

        .fetched-post {
          .dish-type {
            font-size: 1.8em;
          }

          :last-child {
            font-size: 1.5em;
          }
        }
      }
    }
  }
}

@media (min-width: 3840px) {
  .container {
    margin: 0 10%;

    .user-container {
      .title {
        font-size: 5.5em;
        margin-bottom: 3%;
      }

      .post-content {
        #title-textarea {
          height: 3vw;
          padding-top: 3.6%;
          font-size: 4em;
        }

        #post-content {
          margin-bottom: 5%;
          font-size: 4em;
        }

        .img-container {
          font-size: 4em;
          margin-bottom: 5%;

          label {
            display: block;
            text-align: left;
          }

          input {
            text-align: center;
          }
        }

        .select-class {
          font-size: 4em;
          text-align: left;

          label {
            margin-bottom: 2%;
          }

          select {
            font-size: 1em;
          }
        }
      }

      button {
        width: 100%;
        margin-top: 5%;
        padding: 6%;
        font-size: 5em;
      }
    }

    .posts-container {
      .post {
        .informations-about {
          .post-title {
            font-size: 8em;
          }

          .user-nickname {
            font-size: 5em;
            margin-bottom: 0.8%;
          }

          .date {
            font-size: 4em;
          }
        }

        .fetched-post {
          .dish-type {
            font-size: 5.5em;
          }

          :last-child {
            font-size: 4.1em;
          }
        }
      }
    }
  }
}
</style>
