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

@media (max-width: 360px) {
  .container {
    margin: 0;

    .headers-container {
      :first-child {
        font-size: 2em;
        margin-top: 2%;
      }

      :last-child {
        font-size: 1.3em;
        margin-bottom: 4%;
      }
    }

    .form {
      .input-container {
        input {
          width: 100%;
          margin-top: 1%;
          padding: 2%;
        }
      }

      .button-container {
        button {
          width: 100%;
          margin: 2% 0 4% 0;
          padding: 4% 0;
        }
      }
    }
  }
}

@media (min-width: 361px) {
  .container {
    margin: 0;

    .headers-container {
      :first-child {
        font-size: 2.3em;
        margin-top: 2%;
      }

      :last-child {
        font-size: 1.5em;
        margin-bottom: 4%;
      }
    }

    .form {
      .input-container {
        input {
          width: 100%;
          margin-top: 1%;
          padding: 3%;
        }
      }

      .button-container {
        button {
          width: 100%;
          margin: 2% 0 4% 0;
          padding: 4% 0;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    .headers-container {
      :first-child {
        font-size: 2.8em;
      }

      :last-child {
        font-size: 2em;
      }
    }

    .form {
      .input-container {
        input {
          padding: 2%;
        }
      }

      .button-container {
        button {
          padding: 2%;
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .container {
    margin: 0 6em;

    .headers-container {
      :first-child {
        font-size: 3em;
      }

      :last-child {
        margin: 1% 0 2% 0;
        font-size: 1.8em;
      }
    }

    .form {
      #form {
        .input-container {
          label {
            display: block;
            font-weight: bold;
            font-size: 1.1em;
          }

          input {
            width: 50%;
            padding: 1%;
            margin-bottom: 1%;
            border-radius: 5px;
            border: 2px solid $border-color;
            outline: none;
            box-sizing: border-box;

            &:focus {
              border: 2px solid $focus-border-color;
            }
          }
        }

        .button-container {
          width: 20%;
          margin-bottom: 0.5%;

          button {
            border: none;
            border-radius: 5px;
            background-color: $button-color;
            color: white;
            padding: 8% 3%;
            font-size: 1.5em;
            font-weight: 200;
            cursor: pointer;
            outline: none;

            &:hover {
              background-color: $hover-button-color;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 3840px) {
  .container {
    margin: 0 10%;

    .headers-container {
      :first-child {
        font-size: 9em;
        font-weight: 400;
      }

      :last-child {
        margin: 1% 0 2% 0;
        font-size: 8em;
      }
    }

    .form {
      #form {
        .input-container {
          label {
            display: block;
            font-weight: bold;
            font-size: 5em;
          }

          input {
            width: 50%;
            padding: 2%;
            margin-bottom: 1%;
            border-radius: 5px;
            border: 2px solid $border-color;
            outline: none;
            box-sizing: border-box;
            font-size: 3.5em;

            &:focus {
              border: 2px solid $focus-border-color;
            }
          }
        }

        .button-container {
          width: 30%;
          margin-bottom: 0.5%;

          button {
            border: none;
            border-radius: 5px;
            background-color: $button-color;
            color: white;
            padding: 8% 8%;
            font-size: 7em;
            font-weight: 200;
            cursor: pointer;
            outline: none;

            &:hover {
              background-color: $hover-button-color;
            }
          }
        }
      }
    }
  }
}
</style>
