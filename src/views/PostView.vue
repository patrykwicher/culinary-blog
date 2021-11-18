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

@media (max-width: 360px) {
  .container {
    margin: 0;

    .post-title {
      font-size: 2em;
      margin: 0 0 1% 0;
    }

    .informations-container {
      display: block;

      .author-container {
        :first-child {
          font-size: 1.1em;
        }

        :last-child {
          font-size: 0.9em;
          margin: 1% 0;
        }
      }

      .comments {
        font-size: 0.9em;

        p {
          margin: 0 0 3% 0;
        }
      }
    }

    .image-container {
      margin-top: 6%;

      img {
        width: 100%;
      }
    }

    .post-content {
      p {
        margin: 3% 0 5% 0;
        font-size: 0.9em;
      }
    }
  }
}

@media (min-width: 361px) {
  .container {
    margin: 0;

    .post-title {
      font-size: 2.2em;
      margin: 0 0 1% 0;
    }

    .informations-container {
      display: block;

      .author-container {
        :first-child {
          font-size: 1.2em;
        }

        :last-child {
          font-size: 1em;
          margin: 1% 0;
        }
      }

      .comments {
        font-size: 1em;

        p {
          margin: 0 0 2% 0;
        }
      }
    }

    .image-container {
      margin-top: 6%;

      img {
        width: 100%;
      }
    }

    .post-content {
      p {
        margin: 3% 0 5% 0;
        font-size: 1em;
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    .post-title {
      font-size: 2.5em;
    }

    .informations-container {
      .author-container {
        :last-child {
          margin: 0.5% 0;
        }
      }

      .comments {
        p {
          margin-bottom: 1%;
        }
      }
    }

    .image-container {
      margin-top: 3%;
    }

    .post-content {
      font-size: 1.1em;
    }
  }
}

@media (min-width: 1280px) {
  .container {
    margin: 0 6em;

    .post-title {
      font-size: 3em;
      margin-bottom: 0%;
    }

    .informations-container {
      display: flex;
    }

    .fetched-post {
      :last-child {
        font-size: 1em;
      }
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .post-title {
      font-size: 4em;
    }

    .informations-container {
      .author-container {
        :first-child {
          font-size: 2em;
          margin-bottom: 2%;
        }

        :last-child {
          font-size: 1.3em;
        }
      }

      .comments {
        font-size: 1.3em;
      }
    }

    .post-content {
      font-size: 1.5em;
    }
  }
}

@media (min-width: 3840px) {
  .container {
    margin: 0 10%;

    .post-title {
      font-size: 9em;
    }

    .informations-container {
      .author-container {
        :first-child {
          font-size: 6em;
        }

        :last-child {
          font-size: 4em;
        }
      }

      .comments {
        font-size: 4em;
      }
    }

    .post-content {
      font-size: 4.2em;
    }
  }
}
</style>
