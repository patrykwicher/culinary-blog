<template lang="html">
  <div class="container">
    <div class="posts-container" v-for="(post, index) in specifiedTypeDishes" :key="index">
      <div class="fetched-post">
            <div class="image-container">
              <img :src="post.imageUrl" alt="" @click="showPost($event)">
            </div>
            <p class="dish-type"> {{ post.dishType }} </p>
            <p class="title" @click="showPost($event)"> {{ post.postTitle }} </p>
            <p class="post-content"> {{ post.postCOntent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    specifiedTypeDishes() {
      return this.$store.state.arrayOfSpecifiedDishes;
    }
  }
}
</script>

<style lang="scss" scoped>
$hover-green-color: #6B9428;
$title-font-color: #212121;
$description-color: #9E9E9E;

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
    font-family: 'Work Sans', sans-serif;
    margin: 0 12em;
    white-space: pre-wrap;
    box-sizing: border-box;

    .posts-container {
        // box-sizing: border-box;
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

            .image-container {
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
                margin: 1% 0 0;
            }

            .post-content {
                margin: 0;
                color: $description-color;
            }
        }
    }
}

@media (max-width: 360px) {
  .container {
    margin: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2.5%;

    .posts-container {
        margin-bottom: 15%;

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
  .container {
    margin: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 3.5%;

    .posts-container {
        margin-bottom: 15%;

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

@media (min-width: 768px) {
  .container {
    margin: 0;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    grid-gap: 1%;

    .posts-container {
        margin-bottom: 0;

      .fetched-post {
        .image-container {
          width: 100%;
          height: 150px;

          img {
            border-radius: 5px;
          }
        }

        .dish-type {
          font-size: 1em;
        }

        .title {
          font-size: 1.4em;
          font-weight: 400;
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .container {
    margin: 0 6em;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .posts-container {
      .fetched-post {
        .image-container {
          width: 100%;
          height: 200px;

          img {
            border-radius: 5px;
          }
        }

        .dish-type {
          font-size: 1em;
        }

        .title {
          font-size: 1.6em;
          font-weight: 400;
        }
      }
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .posts-container {
      .fetched-post {
        .image-container {
          height: 280px;
        }

        .dish-type {
          font-size: 1.7em;
        }

        .title {
          font-size: 2.4em;
        }
      }
    }
  }
}

@media (min-width: 3820px) {
  .container {
    margin: 0 10%;

    .posts-container {
      .fetched-post {
        .image-container {
          height: 500px;
        }

        .dish-type {
          font-size: 3.7em;
        }

        .title {
          font-size: 5.2em;
        }
      }
    }
  }
}
</style>
