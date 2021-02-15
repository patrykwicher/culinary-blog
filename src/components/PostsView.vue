<template lang="html">
  <p class="header">Recent posts...</p>
  <div class="container">
    <div class="posts-container" v-for="(post, index) in fetchAllPosts" :key="index" >
      <div class="informations-about" :style="{ display: 'none' }">
        <p> {{ post.date }}</p>
        <p> {{ post.userNickname }} </p>
      </div>
      <div class="fetched-post">
        <div class="image-container" @click="showPost($event)">
          <!-- <router-link :to="{ name: 'Post View', params: { selectedPost.postId }}"> -->
            <img :src="post.imageUrl" alt="">
          <!-- </router-link> -->
        </div>
        <p class="dish-type"> {{ post.dishType }} </p>
        <p class="title" @click="showPost($event)"> {{ post.postTitle }} </p>
        <p class="post-content"> {{ post.postCOntent }}</p>
        <!-- <p class="post-content" v-if="post.postContent === fetchAllPosts[0].postContent"> {{ post.postContent.split(' ').slice(0, 32).join(" ") }}... </p> -->
      </div>
    </div>
  </div>
</template>

<script>
// import router from '@/router/index'

export default {
  data() {
    return {
    }
  },
  methods: {
    showPost(event) {
      const postData = {
        imageUrl: '',
        title: ''
      }

      postData.imageUrl = event.target.src;
      postData.title = event.target.textContent;
      this.$store.dispatch('getPostData', postData);
    }
  },
  computed: {
    fetchAllPosts() {
      return this.$store.state.allPosts;
    },
    selectedPost() {
      return this.$store.state.selectedPost;
    }
  },
}
</script>

<style lang="scss" scoped>
$hover-green-color: #6B9428;
$title-font-color: #212121;
$description-color: #9E9E9E;

.header {
    font-size: 2.7em;
    font-family: 'Work Sans', sans-serif;
    text-align: center;
    margin: 4% 0 1% 0;
    font-weight: 300;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
    font-family: 'Work Sans', sans-serif;
    margin: 0 12em;
    white-space: pre-wrap;

    // :first-child {
    //   grid-column: 1;
    //   grid-row-start: 1;
    //   grid-row-end: 3;
    // }

    .posts-container {
        box-sizing: border-box;
        // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        .informations-about {
            display: flex;
            justify-content: space-between;

            p {
                margin: 0;
            }
        }

        .fetched-post {
          width: 100%;
          height: 80%;

            .title {
                font-size: 1.5em;
                margin: 0;
                color: $title-font-color;
                font-size: 1.75em;
                font-weight: 300;

                &:hover {
                  cursor: pointer;
                  color: $hover-green-color;
                  transition: all 0.1s ease-in-out;
                }
            }

            .image-container{
              width: 100%;
              height: 100%;

              img {
                // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                width: 100%;
                height: 100%;
                object-fit: cover;
                // overflow: hidden;

                &:hover {
                  cursor: pointer;
                }
              }
            }

            .dish-type {
              color: $hover-green-color;
              margin: 1% 0 0 0;
            }

            .post-content {
              margin: 0;
              color: $description-color;
            }
        }
    }
}
</style>
