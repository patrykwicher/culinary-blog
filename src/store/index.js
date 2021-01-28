import { createStore } from 'vuex'
import * as firebase from '../firebase'

export default createStore({
  state: {
    toggleLogin: false,
    toggleRegistration: false,
    userProfile: {}
  },
  mutations: {
    toggleLogin(state) {
      if(!state.toggleLogin) {
        state.toggleRegistration = false;
      }
      state.toggleLogin = !state.toggleLogin;
    },

    toggleRegistration(state) {
      if(!state.toggleRegistration) {
        state.toggleLogin = false;
      }
      state.toggleRegistration = !state.toggleRegistration;
    },

    setUserProfile(state, userData) {
      state.userProfile = userData;
    }
  },
  actions: {
    async signUp(context, signupForm) {
      try {
        const { user } = await firebase.auth.createUserWithEmailAndPassword(signupForm.email, signupForm.password);
        context.dispatch('saveToDataBase', { user, signupForm });
      } catch(err) {
        console.log(err);
      }

      context.commit('toggleRegistration');
    },

    async login(context, loginForm) {
      try {
        const { user } = await firebase.auth.signInWithEmailAndPassword(loginForm.email, loginForm.password);
        context.dispatch('fetchUserData', user);
        context.commit('toggleLogin');
      } catch(err) {
        console.log(err.message);
      }
    },

    async saveToDataBase(context, signUpInfos) {
      try {
        await firebase.usersCollection.doc(signUpInfos.user.uid).set({
          nickname: signUpInfos.signupForm.nickname,
          email: signUpInfos.signupForm.email,
          password: signUpInfos.signupForm.password
        });
      } catch(err) {
        console.log(err.message);
      }
    },

    async fetchUserData({ commit }, user) {
      try {
        const userData = await firebase.usersCollection.doc(user.uid).get();
        commit('setUserProfile', userData.data());
      } catch(err) {
        console.log(err.message);
      }
    },

    async logout({ commit }) {
      try {
        await firebase.auth.signOut();
        commit('setUserProfile', {});
      } catch(err) {
        console.log(err.message);
      }
    },

    async createPost(context, post) {
      try {
        await firebase.recipesCollection.add({
          date: new Date(),
          userId: firebase.auth.currentUser.uid,
          post: post.content
        });
      } catch(err) {
        console.log(err.message);
      }
    }
  },
  modules: {
  }
})
