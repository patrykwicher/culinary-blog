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
        console.log(err);
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
        console.log(err);
      }
    },
    // async fetchUserData(context, user) {
    //  const userData = await firebase.
    // }
  },
  modules: {
  }
})
