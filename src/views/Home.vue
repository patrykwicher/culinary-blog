<template lang="html">
  <div class="container">
    <div class="dish-categories-wrapper">
      <DishCategories />
    </div>
    <div class="posts-wrapper">
      <PostsView />
    </div>
  </div>
</template>

<script>
import DishCategories from "@/components/DishCategories.vue"
import PostsView from "@/components/PostsView.vue"

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  components: {
    DishCategories,
    PostsView
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 360px){
  .container {
    .dish-categories-wrapper {
      margin-bottom: 12em;
    }

    .posts-wrapper {
      margin-bottom: 1em;
    }
  }
}

@media (min-width: 361px) {
  .container {
    .dish-categories-wrapper {
      margin-bottom: 12em;
    }

    .posts-wrapper {
      margin-bottom: 1em;
    }
  }
}

@media (min-width: 768px) {
  .container {
    .dish-categories-wrapper {
      margin-bottom: 4em;
    }
  }
}

@media (min-width: 1280px) {
  .container {
    .dish-categories-wrapper {
      margin-bottom: 7em;
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .dish-categories-wrapper {
      margin-bottom: 14em;
    }
  }
}

@media (min-width: 3840px) {
  .container {
    .dish-categories-wrapper {
      margin-bottom: 18%;
    }
  }
}
</style>
