<template lang="">
  <div class="">
    <div class="dish-cat-comp">
      <DishCategories />
      <div class="login-comp">
        <Login v-if="toggleLoginState" />
        <Registration v-if="toggleRegistrationState" />
      </div>
    </div>
  </div>
</template>

<script>
import DishCategories from "@/components/DishCategories.vue"
import Login from "@/components/Login.vue"
import Registration from "@/components/Registration.vue"

export default {
  data() {
    return {
    }
  },
  methods: {
    toggleLogin() {
      this.$store.commit('toggleLogin');
    },
    toggleRegistration() {
      this.$store.commit('toggleRegistration');
    }
  },
  computed: {
    toggleLoginState() {
      return this.$store.state.toggleLogin;
    },
    toggleRegistrationState() {
      return this.$store.state.toggleRegistration;
    }
  },
  components: {
    DishCategories,
    Login,
    Registration
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
