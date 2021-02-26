<template lang="html">
  <div class="container">
    <div class="user-container">
      <div class="user-name">
        <!-- {{ getUsersProfile.nickname }} -->
        Add new post!
      </div>
      <!-- <div class="user-email">
        {{ getUsersProfile.email }}
      </div> -->
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

        .user-name {
            font-size: 1.5em;
            font-weight: bold;
            // align-self: center;
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
        // background-color: $peas-color;
        margin-left: 2%;
        width: 100%;

        .post {
          // border: 1px solid black;
          // border-top: 1px dashed $peas-color;
          border-bottom: 2px dashed $peas-color;
          margin-left: 3%;
          margin-bottom: 5%;

            .informations-about {
                // display: flex;
                // justify-content: space-between;
                // margin: 0 3%;

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
</style>
