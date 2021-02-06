<template lang="html">
  <div class="container">
    <div class="user-container">
      <div class="user-name">
        {{ getUsersProfile.nickname }}
      </div>
      <div class="user-email">
        {{ getUsersProfile.email }}
      </div>
      <form @submit.prevent>
        <div class="post-content">
          <textarea id="title-textarea" v-model.trim="post.title" name="title" placeholder="Post title..." />
          <!-- <label for="post-content">Create a Post!</label> -->
          <textarea id="post-content" v-model.trim="post.content" name="post-content" placeholder="Write a post!" />
        </div>
        <button name="button" @click="createPost()" :disabled="post.content && post.title === ''">Publish</button>
      </form>
    </div>
    <div class="posts-container">
      <div class="post" v-for="(post, index) in getUsersPostsWithProperDataFormat" :key="index">
        <div class="informations-about">
          <p>{{ post.userNickname }}</p>
          <p>{{ post.date }}</p>
        </div>
        <div class="fetched-post">
          <p>{{ post.postTitle }}</p>
          <p>{{ post.postContent }}</p>
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
        content: ``
      },
    }
  },
  methods: {
    createPost() {
      this.$store.dispatch('createPost', this.post);
      this.post.title = '';
      this.post.content = '';
    },
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

.container {
    display: flex;
    font-family: "Work Sans", sans-serif;
    margin: 0 12em 0 12em;

    .user-container {
        display: flex;
        flex-direction: column;
        padding: 2%;
        background-color: $peas-color;
        border-radius: 5px;
        width: 40%;
        height: 100%;

        .user-name {
            font-size: 1.5em;
            font-weight: bold;
            align-self: center;
        }

        .user-email {
            font-size: 1em;
            align-self: center;
            margin: 5% 0 15%;
        }

        .post-content {

            label {
                display: block;
                text-align: center;
                margin-bottom: 5%;
            }

            #title-textarea {
                border: none;
                width: 100%;
                height: 2vw;
                box-sizing: border-box;
                margin-bottom: 2%;
                padding: 3%;
                resize: none;
            }

            #post-content {
                width: 100%;
                height: 35vh;
                border: none;
                box-sizing: border-box;
                padding: 3%;
                resize: none;
            }
        }

        button {
            padding: 5%;
            width: 100%;
            background-color: white;
            border: none;
            margin-top: 2%;
            cursor: pointer;

            &:hover {
                background-color: red;
            }
        }
    }

    .posts-container {
        background-color: $peas-color;
        margin-left: 2%;
        width: 100%;
        border-radius: 5px;

        .post {
          border: 1px solid black;
          border-radius: 5px;
          margin: 3% 3%;

            .informations-about {
                display: flex;
                justify-content: space-between;
                margin: 0 3%;
                font-size: 1.2em;
            }

            .fetched-post {
                margin: 0 3%;
                :first-child {
                    text-align: center;
                    font-size: 1.5em;
                    font-weight: bold;
                    margin-top: 0;
                }
            }
        }
    }
}
</style>
