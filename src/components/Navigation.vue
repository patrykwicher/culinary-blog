<template lang="html">
  <div class="container">
    <header>
      <div class="header-container">
        <div class="logo-container">
          <router-link class="links" to="/">
            <div class='peas'></div>
            <div class='peas'></div>
            <h2>peas <span id="ampersand">&</span> loaf</h2>
          </router-link>
        </div>
        <div class="login-register-container">
          <p @click="toggleLogin()">Login</p>
          <p @click="toggleRegistration()">Register</p>
        </div>
      </div>
      <nav>
        <div class="nav-container">
          <div class="links-container">
          <div>
            <router-link class="links" to="/">HOME</router-link>
          </div>
          <div>
            <router-link class="links" to="/main-dishes">MAIN DISHES</router-link>
          </div>
          <div>
            <router-link class="links" to="/desserts">DESSERTS</router-link>
          </div>
          <div>
            <router-link class="links" to="/salads">SALADS</router-link>
          </div>
          <div>
            <router-link class="links" to="/about">ABOUT</router-link>
          </div>
        </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLogin() {
      this.$store.commit('toggleLogin');
    },
    toggleRegistration() {
      this.$store.commit('toggleRegistration');
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400&display=swap');
$font-color: #424242;
$ampersand-color: #9E9E9E;
$peas-color: #90C041;
$hover-color: #53800A;

.container {
    font-family: 'Work Sans', sans-serif;
    margin-bottom: 5vh;

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $font-color;

        .logo-container {
            display: flex;

            .links {
                text-decoration: none;
                display: flex;

                .peas {
                    width: 1.1em;
                    height: 1.1em;
                    background-color: $peas-color;
                    align-items: center;
                    margin-top: 0.8em;
                    border-radius: 50%;
                }

                :nth-child(2) {
                    margin: 0.8em 1em 0 0.4em;
                }

                h2 {
                    color: $font-color;
                    font-family: 'Work Sans', sans-serif;
                    font-size: 2em;
                    margin-top: 0;
                    font-weight: 400;

                    #ampersand {
                        color: $ampersand-color;
                    }
                }
            }
        }
        .login-register-container {
            display: flex;
            :first-child {
                margin-right: 1em;
            }

            p {
                font-family: 'Work Sans', sans-serif;
                cursor: pointer;
                margin-top: 0;
                color: $ampersand-color;
                font-size: 0.9em;

                &:hover {
                    color: $hover-color;
                }
            }
        }
    }

    .nav-container {
        border: 1px dashed $peas-color;
        border-right: none;
        border-left: none;

        .links-container {
          padding: 0.7em 0;
          margin: 0 8em 0 8em;
          display: flex;
          justify-content: space-evenly;

          .links {
              text-decoration: none;
              color: $font-color;
              font-size: 0.8em;
          }
        }
    }
}
</style>
