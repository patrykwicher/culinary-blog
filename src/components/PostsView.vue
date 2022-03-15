<template lang="html">
  <p class="header">Recent posts...</p>
  <div class="no-posts" v-if="fetchAllPosts.length === 0">
    No posts...
  </div>
  <div class="container" v-else>
    <div class="posts-container" v-for="(post, index) in fetchAllPosts" :key="index">
      <div class="fetched-post">
        <div class="image-container" @click="showPost($event)">
          <img :src="post.imageUrl" alt="">
        </div>
        <p class="dish-type"> {{ post.dishType }} </p>
        <p class="title" @click="showPost($event)"> {{ post.postTitle }} </p>
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

.no-posts {
  text-align: center;
  margin: 2rem 0;
  min-height: 30vh;
  font-family: "Work Sans", sans-serif;
}

.container {
    display: grid;
    font-family: 'Work Sans', sans-serif;
    white-space: pre-wrap;

    .posts-container {
        .informations-about {
            display: flex;
            justify-content: space-between;

            p {
                margin: 0;
            }
        }

        .fetched-post {
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
              img {
                object-fit: cover;
                transition: .3s ease;

                &:hover {
                  cursor: pointer;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
              }
            }

            .dish-type {
              color: $hover-green-color;
              margin: 0.5rem 0 0 0;
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
    column-gap: 3vw;

    .posts-container {
      width: 100%;
      height: 220px;
      margin-top: 1rem;
       
      .fetched-post {
        height: 70%;
        
        .image-container {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
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
    column-gap: 3vw;
    margin: 4% 0 0 0;

    .posts-container {
      width: 100%;
      height: 240px;

      .fetched-post {
        height: 80%;

        .image-container {
          width: 100%;
          height: 100%;

          img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
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

  .no-posts {
    font-size: 1.4rem;
  }

  .container {
    margin: 1% 0 3% 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2vw;

    .posts-container {
      height: 260px;

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

@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .posts-container {
      height: 280px;
    }
  }
}

@media (min-width: 1280px) {
  .header {
    margin-bottom: 1%;
  }

  .no-posts {
    font-size: 1.7rem;
  }

  .container {
    margin: 0 6em 3% 6em;

    .posts-container {
      .fetched-post {
        .title {
          font-size: 1.5em;
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .container {
    margin-top: 1.5vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1.5vw;

    .posts-container {
      height: 320px;
      
      .fetched-post {
        height: 75%;
      }
    }
  }
}

@media (min-width: 1920px) {
  .header {
    font-size: 4.5em;
  }

  .no-posts {
    font-size: 2rem;
  }

  .container {
    .posts-container {
      height: 450px;

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

  .no-posts {
    font-size: 4rem;
  }

  .container {
    margin: 0 10%;
    padding-bottom: 3%;

    .posts-container {
      height: 800px;

      .fetched-post {
        .image-container {
          img {
            border-radius: 20px;
          }
        }

        .dish-type {
          font-size: 3.5em;
        }

        .title {
          font-size: 4.9em;
        }
      }
    }
  }
}
</style>
