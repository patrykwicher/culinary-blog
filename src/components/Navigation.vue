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
        <div class="login-register-user-logout-container">
          <div class="if-user-logged" v-if="!getUsersProfile.nickname">
            <router-link to="/login">
              <p>Login</p>
            </router-link>
            <router-link to="/register" class="links">
              <p>Register</p>
            </router-link>
          </div>
          <div class="if-user-logged" v-else>
            <router-link to="/user-panel" class="links">
              <p> {{ getUsersProfile.nickname }}</p>
            </router-link>
            <p @click="logout()">Logout</p>
          </div>
        </div>
      </div>
      <nav>
        <div class="nav-container">
          <div class="links-container">
            <div>
              <router-link class="links" to="/">Home</router-link>
            </div>
            <div @click="getDishTypeValue($event)" class="links">
              <p>Main Dishes</p>
            </div>
            <div @click="getDishTypeValue($event)" class="links">
              <p>Desserts</p>
            </div>
            <div @click="getDishTypeValue($event)" class="links">
              <p>Salads</p>
            </div>
            <div @click="getDishTypeValue($event)" class="links">
              <p>Soups</p>
            </div>
          </div>
        </div>
        <div class="cookbook-bar">
          <p>The Peas & Loaf Cookbook is here. <a href="#">Order Now!</a></p>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    getDishTypeValue(event) {
      let dishType = event.target.textContent;

      this.$store.commit('showPostsWithSpecifiedDishType', dishType);
    }
  },
  computed: {
    getUsersProfile() {
      return this.$store.state.usersProfile;
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
    margin: 0 12em 5vh;
    outline: none;

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $font-color;

        .logo-container {
            display: flex;
            outline: none;

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

        .login-register-user-logout-container {
            display: flex;

            .if-user-logged {
                display: flex;
                :first-child {
                    margin-right: 2em;
                    text-decoration: none;
                }

                :last-child {
                    text-decoration: none;
                }

                p {
                    font-family: 'Work Sans', sans-serif;
                    cursor: pointer;
                    margin-top: 0;
                    color: $ampersand-color;
                    font-size: 1em;

                    &:hover {
                        color: $hover-color;
                    }
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
            margin: 0 8em;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .links {
                text-decoration: none;
                color: $font-color;
                font-size: 0.8em;
                margin-top: 0;
                cursor: pointer;

                P {
                  margin: 0;
                }
            }
        }
    }

    .cookbook-bar {
      text-align: center;
      font-size: 1.2em;
      background-color: #E5F5F7;
      border-radius: 5px;
      margin-top: 3%;

      p {
        padding: 2% 0;

        a {
          color: $hover-color;

          &:hover {
            opacity: 0.8;
            transition: opacity 0.3s;
            text-decoration: none;
          }
        }
      }
    }
}
</style>
