<template lang="html">
  <div class="container">
    <div class="">
      <p class="post-title"> {{ fetchPost.postTitle }}</p>
    </div>
    <div class="informations-container">
      <div class="author-container">
        <p>By {{ fetchPost.userNickname }}</p>
        <p>Published on {{ fetchPost.date }}</p>
      </div>
      <div class="comments">
        <p>0 comments</p>
      </div>
    </div>
    <div class="image-container">
      <img :src="fetchPost.imageUrl" :alt="fetchPost.postTitle">
    </div>
    <div class="post-content">
      <p> {{ fetchPost.postContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fetchPost() {
      const selectedPost = Object.assign({}, this.$store.state.selectedPost);
      return selectedPost;
    }
  }
}
</script>

<style lang="scss" scoped>
$border-bottom-color: #CCCCCC;
$font-color: #868686;

  .container {
    margin: 0 12em;
    font-family: 'Work Sans', sans-serif;
    white-space: pre-wrap;

    .post-title {
      font-size: 3em;
      font-weight: 300;
      margin-bottom: 1%;
    }

    .informations-container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $border-bottom-color;

      .author-container {

        :first-child {
          font-size: 1.3em;
          font-weight: 400;
          margin: 0;
        }

        :last-child {
          margin-top: 0.5%;
          margin-bottom: 5%;
          font-size: 1em;
          color: $font-color;
        }
      }
    }

    .image-container {
      width: 100%;
      height: auto;
      text-align: center;
      margin-top: 3%;

      img {
        width: 80%;
        height: auto;
        object-fit: contain;
      }
    }

    .post-content {
      width: 100%;

      P {
        margin: 2% 10% 0 10%;
        font-size: 1.2em;
      }
    }
  }
</style>
