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
        <div class="login-register-user-logout-container" v-if="windowWidth > 768">
          <div class="if-user-logged" v-if="!getUsersProfile.nickname">
            <router-link class="router-link" to="/login">
              <p>Login</p>
            </router-link>
            <router-link class="router-link" to="/register" >
              <p>Register</p>
            </router-link>
          </div>
          <div class="if-user-logged" v-else>
            <router-link to="/user-panel" class="router-link">
              <p> {{ getUsersProfile.nickname }}</p>
            </router-link>
            <router-link :to="{ name: '', params: {} }" class="router-link">
              <p @click="logout()">Logout</p>
            </router-link>
          </div>
        </div>
        <div class="burger-container" v-else @click="displayMenu()">
          <img src="@/assets/burger-icon.png" alt="burger">
        </div>
      </div>
      <nav>
        <div class="nav-container">
          <div class="links-container">
            <div class="login-register-burger" v-if="windowWidth < 769">
              <div class="">
                <router-link to="/login" class='links' v-if="!getUsersProfile.nickname" @click="closeMenu()">Login</router-link>
                <router-link to="/user-panel" class="links" @click="closeMenu()" v-else>
                  {{ getUsersProfile.nickname }}
                </router-link>
              </div>
              <div class="">
                <router-link to="/register" class='links' v-if="!getUsersProfile.nickname" @click="closeMenu()">Register</router-link>
                <p @click="logout()" v-else>Logout</p>
              </div>
            </div>
            <div class="links">
              <router-link class="router-link" to="/">Home</router-link>
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
  data() {
    return {
      windowWidth: window.innerWidth,
      navContainer: document.getElementsByClassName("nav-container"),
      disable: 0,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    getDishTypeValue(event) {
      const dishType = event.target.textContent;
      const navContainer = document.getElementsByClassName("nav-container");

      if (this.windowWidth < 769) {
        navContainer[0].style.display = "none";
        this.$store.commit("showPostsWithSpecifiedDishType", dishType);
      } else {
        this.$store.commit("showPostsWithSpecifiedDishType", dishType);
      }
    },
    displayMenu() {
      const linksContainer = document.getElementsByClassName("links-container");

      if (this.navContainer[0].style.display === "none") {
        this.navContainer[0].style.display = "block";
        this.navContainer[0].style.position = "fixed";
        linksContainer[0].style.display = "block";
        this.disable = 1;
      } else {
        this.navContainer[0].style.display = "none";
        this.disable = 0;
      }
    },
    closeMenu() {
      this.displayMenu();
    },
  },
  computed: {
    getUsersProfile() {
      return this.$store.state.usersProfile;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400&display=swap");
$font-color: #424242;
$ampersand-color: #9e9e9e;
$peas-color: #90c041;
$hover-color: #53800a;

.container {
  font-family: "Work Sans", sans-serif;
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
          flex-shrink: 0;
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
          font-family: "Work Sans", sans-serif;
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
          font-family: "Work Sans", sans-serif;
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
    border-radius: 10px;
    border-right: none;
    border-left: none;

    .links-container {
      padding: 0.7em 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .links {
        text-decoration: none;
        color: $font-color;
        font-size: 0.9em;
        margin-top: 0;
        cursor: pointer;

        P {
          margin: 0;
        }

        .router-link {
          text-decoration: none;
          color: $font-color;
          font-size: 1.2em;
        }
      }
    }
  }

  .cookbook-bar {
    text-align: center;
    font-size: 1.2em;
    background-color: #e5f5f7;
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

@media (max-width: 360px) {
  .container {
    margin: 0;

    .header-container {
      align-items: center;

      .logo-container {
        width: 75%;

        .links {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;

          .peas {
            margin-top: 1%;
            width: 1.2em;
            height: 1.2em;
          }

          :first-child {
            margin-right: 0;
          }

          :nth-child(2) {
            margin-left: 1%;
            margin-right: 3%;
          }

          h2 {
            font-size: 1.4em;
            width: 100%;
            margin-bottom: 0;
          }
        }
      }

      .login-register-user-logout-container {
        .if-user-logged {
          :first-child {
            margin: 0.3em;
          }
        }
      }

      .burger-container {
        width: 14%;
        margin-right: 2%;
        margin-top: 1%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .nav-container {
      display: none;
      height: auto;
      width: 95vw;

      .links-container {
        padding: 0;
        margin: 2rem 0;
        width: 100%;
        display: block;

        .login-register-burger {
          width: 100%;
          display: flex;
          margin-bottom: 2rem;
          font-weight: bold;
          font-size: 1.2em;
          text-align: center;
          color: $font-color;

          div {
            width: 100%;

            p {
              margin: 0;
              font-size: 1.2em;
            }
          }
        }

        .links {
          width: 100%;
          text-align: center;
          margin-top: 0.9rem;
          font-size: 1em;
        }
      }
    }
  }

  .cookbook-bar {
    margin: 0;

    p {
      font-size: 0.8em;
      margin-top: 2%;
    }
  }
}

@media (min-width: 361px) {
  .container {
    margin: 0;

    .header-container {
      align-items: center;

      .logo-container {
        width: 75%;

        .links {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;

          .peas {
            margin-top: 1%;
            width: 1.3em;
            height: 1.3em;
          }

          :first-child {
            margin-right: 0;
          }

          :nth-child(2) {
            margin-left: 1%;
            margin-right: 2%;
          }

          h2 {
            font-size: 1.4em;
            width: 100%;
            margin-bottom: 0;
          }
        }
      }

      .login-register-user-logout-container {
        .if-user-logged {
          :first-child {
            margin: 0.3em;
          }
        }
      }

      .burger-container {
        width: 12.5%;
        margin-right: 2%;
        margin-top: 1%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .nav-container {
      width: 95vw;
      height: auto;

      .links-container {
        padding: 0;
        margin: 3rem 0;
        display: block;

        .login-register-burger {
          width: 100%;
          display: flex;
          margin-bottom: 2rem;
          font-weight: bold;
          font-size: 1.2em;
          text-align: center;
          color: $font-color;

          div {
            width: 100%;
            margin-top: 2%;

            p {
              margin: 0;
              font-size: 1.2em;
              cursor: pointer;
            }
          }
        }
        .links {
          width: 100%;
          text-align: center;
          margin-top: 4%;
          font-size: 1em;
        }
      }
    }
  }

  .cookbook-bar {
    margin: 0;

    p {
      font-size: 0.9em;
      margin-top: 2%;
    }
  }
}

@media (min-width: 414px) {
  .container {
    .header-container {
      .logo-container {
        .links {
          display: flex;
          align-items: center;

          .peas {
            width: 1.3em;
            height: 1.3em;
          }

          :nth-child(2) {
            margin-right: 2%;
          }

          h2 {
            font-size: 1.7em;
          }
        }
      }

      .burger-container {
        width: 9%;
      }
    }

    .nav-container {
      margin: auto 0;

      .links-container {
        margin: 5rem 0;
        font-size: 1.1rem;

        .login-register-burger {
          margin-bottom: 2.5rem;
        }
      }
    }
  }

  .cookbook-bar {
    margin: 0;
    padding: 0 2%;

    p {
      font-size: 0.9em;
      margin-top: 2%;
    }
  }
}

@media (min-width: 768px) {
  .container {
    .header-container {
      .logo-container {
        .links {
          .peas {
            width: 1.5em;
            height: 1.5em;
          }

          :nth-child(2) {
            margin: 1% 1% 0 0.5%;
          }

          h2 {
            font-size: 2.5em;
          }
        }
      }

      .burger-container {
        width: 7%;
      }
    }

    .nav-container {
      height: auto;
      width: 70vw;

      .links-container {
        .links {
          margin-top: 3%;
          font-size: 1.1em;
        }
      }
    }

    .cookbook-bar {
      margin-top: 2%;
      font-size: 1.5em;

      p {
        margin-top: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    .nav-container {
      display: none;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 30px 300px rgba(0, 0, 0, 0.8);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .links-container {
        .login-register-burger {
          margin-bottom: 3.5rem;

          .links {
            font-size: 1.4em;
            border: none;
          }

          :hover {
            color: $hover-color;
          }
        }

        .links {
          font-size: 1.4em;
          width: 50%;
          margin-left: auto;
          margin-right: auto;

          p {
            font-size: 1.2em;
            padding: 1.5rem 0 0 0;
            margin-bottom: -2%;
          }

          :hover {
            color: $hover-color;
          }
        }
      }
    }
  }
}

@media (min-width: 769px) {
  .container {
    .header-container {
      .logo-container {
        .links {
          display: flex;
          align-items: center;

          .peas {
            width: 1.5em;
            height: 1.5em;
          }

          h2 {
            font-size: 2.5em;
          }
        }
      }

      .login-register-user-logout-container {
        .if-user-logged {
          align-items: center;
          font-size: 1.1em;

          .router-link {
            p {
              transition: 0.2s ease;

              &:hover {
                color: $hover-color;
              }
            }
          }

          p {
            margin: auto;
          }
        }
      }
    }

    .nav-container {
      margin-top: 0.8em;
      display: block;
      width: 100%;

      .links-container {
        display: flex;
        align-items: center;
        font-size: 0.9em;
        margin: 1.5rem 0;

        .links {
          margin: 0;
          transition: 0.3s ease;
          font-size: 1.2rem;

          .router-link {
            text-decoration: none;
            color: $font-color;
            transition: 0.3s ease;
            font-size: 1.2rem;

            &:hover {
              color: $hover-color;
            }
          }

          &:hover {
            color: $hover-color;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .container {
    .header-container {
      .login-register-user-logout-container {
        .if-user-logged {
          align-items: center;
          font-size: 1.2em;

          p {
            margin: auto;
          }
        }
      }
    }

    .nav-container {
      margin-top: 1%;

      .links-container {
        font-size: 1em;
        margin-bottom: 2%;
      }
    }
  }
}

@media (min-width: 1280px) {
  .container {
    margin: 0 6em;

    .header-container {
      display: flex;
      align-items: center;

      .logo-container {
        .links {
          .peas {
            margin-top: 0;
          }
        }
      }

      .login-register-user-logout-container {
        font-size: 1.1em;
      }
    }

    .cookbook-bar {
      font-size: 1.7em;
    }
  }
}

@media (min-width: 1440px) {
  .container {
    .nav-container {
      align-items: center;

      .links-container {
        margin: 1.7rem 0;

        .links {
          font-size: 1.4rem;

          .router-link {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1920px) {
  .container {
    .header-container {
      .logo-container {
        .links {
          font-size: 1.7em;
        }
      }

      .login-register-user-logout-container {
        .if-user-logged {
          font-size: 2em;
        }
      }
    }

    .nav-container {
      border: 5px dashed $peas-color;
      border-right: none;
      border-left: none;

      .links-container {
        margin: 2.2rem 0;

        .links {
          font-size: 2em;

          .router-link {
            font-size: 2rem;
          }
        }
      }
    }

    .cookbook-bar {
      font-size: 3.2em;
    }
  }
}

@media (min-width: 3840px) {
  .container {
    margin: 0 10%;

    .header-container {
      .logo-container {
        font-size: 2.5em;
      }

      .login-register-user-logout-container {
        .if-user-logged {
          font-size: 4em;
        }
      }
    }

    .nav-container {
      border: 6px dashed $peas-color;
      border-right: none;
      border-left: none;

      .links-container {
        margin: 4rem 0;

        .links {
          font-size: 3.5rem;

          .router-link {
            font-size: 3.5rem;
          }
        }
      }
    }

    .cookbook-bar {
      font-size: 5.5em;
    }
  }
}
</style>
