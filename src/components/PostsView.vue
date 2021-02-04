<template lang="html">
  <h1>Recent posts...</h1>
  <div class="container">
    <div class="posts-container" v-for="(post, index) in fetchAllPosts" :key="index">
      <div class="informations-about">
        <p> {{ post.date.toDate().getDate() }} - {{ post.date.toDate().getMonth() + 1 }} - {{ post.date.toDate().getFullYear() }} </p>
        <p> {{ post.userNickname }} </p>
      </div>
      <div class="fetched-post">
        <p> {{ post.postTitle }} </p>
        <p> {{ post.postContent }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fetchAllPosts() {
      return this.$store.state.allPosts;
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Work Sans', sans-serif;
  text-align: center;
  // margin-top: 10%;
  padding-top: 5%;
}

.container {
    display: grid;
    grid-template-columns: 32% 32% 32%;
    column-gap: 2%;
    font-family: 'Work Sans', sans-serif;
    margin: 0 12em 0 12em;

    .posts-container {
      border: 1px solid black;
      box-sizing: border-box;
      padding: 5%;
      // height: 100%;

      .informations-about {
        display: flex;
        justify-content: space-between;

        p {
          margin: 0 0;
        }
      }

      .fetched-post {


        :first-child {
          text-align: center;
          font-size: 1.4em;
        }
      }
    }
}
</style>
