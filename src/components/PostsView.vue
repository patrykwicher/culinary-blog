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
          <img :src="post.imageUrl" alt="">
        </div>
        <p class="dish-type"> {{ post.dishType }} </p>
        <p class="title" @click="showPost($event)"> {{ post.postTitle }} </p>
        <!-- <p class="post-content" v-if="post.postContent === fetchAllPosts[0].postContent"> {{ post.postContent.split(' ').slice(0, 32).join(" ") }}... </p> -->
      </div>
    </div>
  </div>
</template>

<script>
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
    margin: 5% 0 2% 0;
    font-weight: 400;
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
                font-weight: 400;

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
                box-sizing: border-box;

                &:hover {
                  cursor: pointer;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

                  // border: 2px dashed $hover-green-color;
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

@media (max-width: 360px) {
  .header {
    font-size: 2em;
    margin: 0;
  }

  .container {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5%;
    margin: 5% 0 0 0;

    .posts-container {
      .fetched-post {
        .image-container {
          width: 100%;
          height: 80%;

          img {
            border-radius: 5px;
          }
        }

        .dish-type {
          font-size: 0.8em;
        }

        .title {
          font-size: 1.2em;
        }
      }
    }
  }
}

@media (min-width: 361px) {
  .header {
    font-size: 2em;
    margin: 2% 0 0 0;
  }

  .container {
    grid-template-columns: 1fr 1fr;
    column-gap: 3.5%;
    margin: 4% 0 0 0;

    .posts-container {
      .fetched-post {
        .image-container {
          width: 100%;
          height: 80%;

          img {
            border-radius: 5px;
          }
        }

        .dish-type {
          font-size: 0.9em;
        }

        .title {
          font-size: 1.3em;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .header {
    font-size: 2.8em;
    margin-bottom: 0.7em;
  }

  .container {
    margin: 1% 0 3% 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5%;

    .posts-container {
      .fetched-post {
        .title {
          font-weight: 400;
          font-size: 1.6em;
        }
      }
    }
  }
}

@media (min-width: 834px) {
  .container {
    .posts-container {
      .fetched-post {
        .title {
          margin-top: 1%;
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .header {
    margin-bottom: 1%;
  }

  .container {
    margin: 0 6em 3% 6em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 10px;

    .posts-container {
      .fetched-post {
        .title {
          font-size: 1.5em;
        }
      }
    }
  }
}

@media (min-width: 1920px) {
  .header {
    font-size: 4.5em;
  }

  .container {
    .posts-container {
      .fetched-post {
        .dish-type {
          font-size: 1.7em;
        }

        .title {
          font-size: 2.9em;
        }
      }
    }
  }
}

@media (min-width: 3840px) {
  .header {
    font-size: 9em;
    margin-bottom: 2%;
  }

  .container {
    margin: 0 10%;

    .posts-container {
      margin-bottom: 5%;

      .fetched-post {
        .dish-type {
          font-size: 4.3em;
        }

        .title {
          font-size: 4.9em;
          // font-weight: 400;
        }
      }
    }
  }
}
</style>
