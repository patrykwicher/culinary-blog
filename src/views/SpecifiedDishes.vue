<template lang="html">
  <div class="container">
    <div class="posts-container" v-for="(post, index) in specifiedTypeDishes" :key="index">
      <div class="fetched-post">
            <div class="image-container">
              <img :src="post.imageUrl" alt="" @click="showPost($event)">
            </div>
            <p class="dish-type"> {{ post.dishType }} </p>
            <p class="title" @click="showPost($event)"> {{ post.postTitle }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showPost(event) {
      const postData = {
        imageUrl: "",
        title: "",
      };

      postData.imageUrl = event.target.src;
      postData.title = event.target.textContent;
      this.$store.dispatch("getPostData", postData);
    },
  },
  computed: {
    specifiedTypeDishes() {
      return this.$store.state.arrayOfSpecifiedDishes;
    },
  },
};
</script>

<style lang="scss" scoped>
$hover-green-color: #6b9428;
$title-font-color: #212121;
$description-color: #9e9e9e;

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  font-family: "Work Sans", sans-serif;
  margin: 0 12em;
  white-space: pre-wrap;
  box-sizing: border-box;

  .posts-container {
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
        img {
          object-fit: cover;
          transition: 0.3s ease;

          &:hover {
            cursor: pointer;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    grid-gap: 3vw;

    .posts-container {
      width: 100%;
      height: 220px;

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
  .container {
    margin: 0;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3vw;

    .posts-container {
      width: 100%;
      height: 240px;

      .fetched-post {
        height: 70%;

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
  .container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2vw;

    .posts-container {
      height: 270px;

      .fetched-post {
        .image-container {
          width: 100%;
          height: 100%;

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

@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .posts-container {
      height: 280px;
    }
  }
}

@media (min-width: 1280px) {
  .container {
    margin: 0 6em;

    .posts-container {
      .fetched-post {
        .image-container {
          width: 100%;
          height: 200px;
        }

        .dish-type {
          font-size: 1.1em;
        }

        .title {
          font-size: 1.7em;
          font-weight: 400;
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .container {
    margin-top: 3vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1.5vw;

    .posts-container {
      height: 320px;

      .fetched-post {
        height: 75%;

        .image-container {
          width: 100%;
          height: 250px;
        }

        .dish-type {
          font-size: 0.9em;
          margin-top: 0.5rem;
        }

        .title {
          font-size: 1.5em;
          margin-top: 1%;
        }
      }
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .posts-container {
      height: 450px;

      .fetched-post {
        .image-container {
          height: 330px;
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
      height: 800px;

      .fetched-post {
        .image-container {
          height: 600px;

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
