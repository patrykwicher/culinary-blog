<template lang="html">
  <div class="container">
    <div class="headers-container">
      <p>1 000+ new recipes today!</p>
      <p>Find your new favourite dish right now!</p>
    </div>
    <div class="form">
      <form @submit.prevent id="form">
        <div class="input-container">
          <label for="email">E-MAIL: </label>
          <input v-model.trim="loginForm.email" id="email" type="text" name="email" placeholder="E-mail">
        </div>
        <div class="input-container">
          <label for="password">PASSWORD: </label>
          <input v-model.trim="loginForm.password" @keyup.enter="login()" id="password" type="password" name="password" placeholder="Password">
        </div>
        <div class="button-container">
          <button @click="login()" class="button" type="button" name="button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    }
  },
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

      :last-child {
        font-size: 1.8em;
        margin-top: 2%;
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
  }
</style>
