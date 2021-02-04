<template lang="html">
  <div class="container">
    <div class="headers-container">
      <p>Save your favourite recipes!</p>
      <p>Complete your registration</p>
      <p>Create a free account to save your favourite recipes!</p>
    </div>
    <div class="form-container">
      <form @submit.prevent id="form">
        <div class="input-container">
          <label for="nickname">Nickname</label>
          <input v-model.trim="signupForm.nickname" id="nickname" type="text" name="nickname" placeholder="Nickname">
        </div>
        <div class="input-container">
          <label for="email">Email Address </label>
          <input v-model.trim="signupForm.email" id="email" type="text" name="email" placeholder="E-mail">
        </div>
        <div class="input-container">
          <label for="password">Password </label>
          <input v-model.trim="signupForm.password" @keyup.enter="signUp()" id="password" type="password" name="password" placeholder="6 characters min.">
        </div>
        <div class="button-container">
          <button @click="signUp()" class="button" type="button" name="button">Sign up!</button>
        </div>
      </form>
    </div>
    <div class="extras">
      <p>Already have an account? <router-link to="/login"><span class="login-link">Login here</span></router-link></p>
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
$border-color: #CDCDCD;
$focus-border-color: #b2b0b0;
$button-color: #05a3b5;
$login-link-color: #87a851;
$hover-button-color: #007684;

  .container {
    font-family: 'Work Sans', sans-serif;
    margin: 0 12em 0 12em;

    .headers-container {
      font-weight: 300;

      :first-child {
        font-size: 3em;
        margin-bottom: 0;
      }

      :nth-child(2) {
        font-size: 1.8em;
        margin-top: 2%;
      }

      :last-child {
        font-size: 1.2em;
        margin-bottom: 2%;
      }
    }

    .input-container {
      label {
        display: block;
        font-weight: bold;
        font-size: 1.1em;
      }
      input {
        width: 50%;
        padding: 1%;
        margin-bottom: 2%;
        border-radius: 5px;
        border: 2px solid $border-color;
        outline: none;
        box-sizing: border-box;

        &:focus {
          border: 2px solid $focus-border-color;
        }
      }
    }

    button {
      border: none;
      border-radius: 5px;
      background-color: $button-color;
      color: white;
      padding: 1.5% 3%;
      font-size: 1.5em;
      font-weight: 200;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: $hover-button-color;
      }
    }

    .extras {
      text-align: center;
      font-weight: 400;
      margin-top: 2%;
      font-size: 1.1em;

      :last-child {

        .login-link {
          color: $login-link-color;
          text-decoration: underline;
          text-decoration-color: $login-link-color;
          font-weight: bold;
        }
      }
    }
  }
</style>
