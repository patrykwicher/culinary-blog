<template lang="html">
  <div class="container">
    <div class="user-container">
      <div class="user-name">
        {{ getUserProfile.nickname }}
      </div>
      <div class="user-email">
        {{ getUserProfile.email }}
      </div>
      <form @submit.prevent>
        <div class="post-content">
          <label for="post-content">Create a Post!</label>
          <textarea id="post-content" v-model="post.content" name="post-content" placeholder="Write a post!" />
        </div>
        <button name="button" @click="createPost()" :disabled="post.content === ''">Publish</button>
      </form>
    </div>
    <div class="posts-container">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        content: ''
      }
    }
  },
  methods: {
    createPost() {
      this.$store.dispatch('createPost', this.post);
    }
  },
  computed: {
    getUserProfile() {
      return this.$store.state.userProfile;
    }
  }
}
</script>

<style lang="scss" scoped>
$peas-color: #90C041;

  .container {
    display: flex;
    font-family: "Work Sans", sans-serif;

    .user-container {
      display: flex;
      flex-direction: column;
      padding: 2%;
      background-color: $peas-color;
      border-radius: 5px;


      .user-name {
        font-size: 1.5em;
        font-weight: bold;
        align-self: center;
      }

      .user-email {
        font-size: 1em;
        align-self: center;
        margin: 5% 0 15% 0;
      }

      .post-content {

        label {
          display: block;
          text-align: center;
          margin-bottom: 5%;
        }

        textarea {
          width: 20vw;
          height: 35vh;
          border: none;
          box-sizing: border-box;
          padding: 3%;
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
      padding: 2%;
    }
  }
</style>
