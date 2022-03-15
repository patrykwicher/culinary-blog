<template lang="html">
  <div class="main-menu">
    <div class="dish-card" @click="getDishTypeValue($event)">
      <div class="image">
        <img :src="require('@/assets/pasta2.jpg')" alt="Main dish" />
      </div>
      <div class="dish-type">
        <h2>Main Dishes</h2>
      </div>
    </div>
    <div class="dish-card" @click="getDishTypeValue($event)">
      <div class="image">
        <img :src="require('@/assets/soup2.jpg')" alt="Soup" />
      </div>
      <div class="dish-type">
        <h2>Soup</h2>
      </div>
    </div>
    <div class="dish-card" @click="getDishTypeValue($event)">
      <div class="image">
        <img :src="require('@/assets/salad2.jpg')" alt="Salad" />
      </div>
      <div class="dish-type">
        <h2>Salad</h2>
      </div>
    </div>
    <div class="dish-card" data-value="Dessert" @click="getDishTypeValue($event)">
      <div class="image">
        <img :src="require('@/assets/dessert2.jpg')" alt="Dessert" />
      </div>
      <div class="dish-type">
        <h2>Dessert</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getDishTypeValue(event) {
      let dishType;

      if(event.target.alt) {
        dishType = event.target.alt;
      }
      else {
        dishType = event.target.textContent;
      }

      this.$store.commit('showPostsWithSpecifiedDishType', dishType);
    }
  }
}
</script>

<style lang="scss" scoped>
$hover-color: #53800A;

.main-menu {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 100%;
    column-gap: 2vw;
    margin: 0 12em 0 12em;

    .dish-card {
      transition: color 0.3s;

      &:hover {
        color: $hover-color;
        cursor: pointer;
        transition: color 0.3s;
      }

    .image {
      width: 100%;
      height: 90%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .dish-type {
      font-family: 'Work Sans', sans-serif;
      text-align: center;
      font-size: 1.2em;
    }
  }
}

@media (max-width: 360px) {
  .main-menu {
    margin: 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 100%;
    column-gap: 3vw;
    height: 180px;
    box-sizing: border-box;

    .dish-card {
      transition: color 0.3s;

      &:hover {
        color: $hover-color;
        cursor: pointer;
        transition: color 0.3s;
      }

      .image {
        width: 100%;
        height: 130px;

        img {
          height: 130px
        }
      }

      .dish-type {
        font-size: 0.7em;

        h2 {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (min-width: 361px) {
  .main-menu {
    margin: 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 100%;
    column-gap: 3vw;
    height: 180px;

    .dish-card {
      transition: color 0.3s;

      &:hover {
        color: $hover-color;
        cursor: pointer;
        transition: color 0.3s;
      }

      .image {
        width: 100%;
        height: 130px;

        img {
          height: 130px
        }
      }

      .dish-type {
        font-size: 0.7em;

        h2 {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .main-menu {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2vw;

    .dish-card {
      .image {
        height: 160px;

        img {
          height: 100%;
        }
      }

      .dish-type {
        font-size: 0.9em;
      }
    }
  }
}

@media (min-width: 834px) {
  .main-menu {
    .dish-card {
      .dish-type {
        font-size: 0.9em;
      }
    }
  }
}

@media (min-width: 1280px) {
  .main-menu {
    margin: 0 6em;

    .dish-card {
      .image {
        height: 200px;

        img {
          height: 200px;
        }
      }
    }
  }
}

@media (min-width: 1920px) {
  .main-menu {
    .dish-card {
      .image {
        height: 280px;

        img {
          height: 280px;
        }
      }

      .dish-type {
        font-size: 1.7em;
      }
    }
  }
}

@media (min-width: 3840px) {
  .main-menu {
    margin: 0 10%;

    .dish-card {
      .image {
        height: 550px;

        img {
          height: 550px;
        }
      }

      .dish-type {
        font-size: 3.5em;
      }
    }
  }
}
</style>
