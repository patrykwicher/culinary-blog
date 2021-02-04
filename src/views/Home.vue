<template lang="">
  <div class="">
    <div class="dish-cat-comp">
      <DishCategories />
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
  .dish-cat-comp {
    position: relative;
  }

  .login-comp {
    position: absolute;
    width: 100%;
    top: 40%;
  }
</style>
