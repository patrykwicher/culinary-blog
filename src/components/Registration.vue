<template lang="html">
  <div class="registration-container">
    <div class="close">
      <p @click="toggleOffRegistration()">close</p>
    </div>
    <div class="form">
      <form @submit.prevent id="form">
        <div class="input-container">
          <label for="nickname">NICKNAME: </label>
          <input v-model.trim="signupForm.nickname" id="nickname" type="text" name="nickname" placeholder="Nickname">
        </div>
        <div class="input-container">
          <label for="email">E-MAIL: </label>
          <input v-model.trim="signupForm.email" id="email" type="text" name="email" placeholder="E-mail">
        </div>
        <div class="input-container">
          <label for="password">PASSWORD: </label>
          <input v-model.trim="signupForm.password" id="password" type="password" name="password" placeholder="6 characters min.">
        </div>
        <div class="button-container">
          <button @click="signUp()" class="button" type="button" name="button">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signupForm: {
        nickname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    toggleOffRegistration() {
      this.$store.commit('toggleRegistration');
    },
    signUp() {
      this.$store.dispatch('signUp', {
        nickname: this.signupForm.nickname,
        email: this.signupForm.email,
        password: this.signupForm.password
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$peas-color: #90C041;
$hover-color: #53800A;

  .registration-container {
    background-color: $peas-color;
    font-family: 'Work Sans', sans-serif;
    margin: -10% 30% 0 30%;
    border-radius: 10px;
    padding-bottom: 0.1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 3px solid $hover-color;

    .form {
      margin: 0 16% 7% 16%;
    }

    .input-container input{
      width: 93%;
      border: none;
      border-radius: 5px;
      padding: 5% 3%;
      margin: 3% 0 8% 0;
      border: 2px solid $hover-color;
    }

    label {
      font-weight: bold;
    }

    .close {
      display: flex;
      justify-content: flex-end;
      font-weight: bold;
      margin-right: 1.5em;

      p {
        cursor: pointer;
      }
    }

    .button-container {
      display: flex;
      justify-content: center;

      .button {
        padding: 5% 3%;
        width: 100%;
        border: 2px solid $hover-color;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
      }
    }
  }
</style>
