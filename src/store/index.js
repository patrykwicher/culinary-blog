import { createStore } from 'vuex'
import * as firebase from '../firebase'
import router from '@/router/index'
import fb from 'firebase/app'

export default createStore({
  state: {
    toggleLogin: false,
    toggleRegistration: false,
    usersProfile: {},
    usersPosts: [],
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
    setUsersProfile(state, userData) {
      state.usersProfile = userData;
    },
    fetchUsersPosts(state, usersPostsArray) {
      state.usersPosts = usersPostsArray;
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
        context.dispatch('fetchUsersPosts');
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

    async fetchUserData({ commit, dispatch }, user) {
      try {
        const userData = await firebase.usersCollection.doc(user.uid).get();
        commit('setUsersProfile', userData.data());
        dispatch('fetchUsersPosts');
      } catch(err) {
        console.log(err.message);
      }
    },

    async logout({ commit }) {
      try {
        await firebase.auth.signOut();
        router.push('/');
        commit('setUsersProfile', {});
        commit('fetchUsersPosts', []);
      } catch(err) {
        console.log(err.message);
      }
    },

    async createPost({ dispatch }, post) {
      try {
        await firebase.recipesCollection.add({
          date: fb.firestore.Timestamp.fromDate(new Date()),
          userId: firebase.auth.currentUser.uid,
          post: post.content
        });
        dispatch('fetchUsersPosts');
      } catch(err) {
        console.log(err.message);
      }
    },

    async fetchUsersPosts({ commit }) {
      try {
        firebase.recipesCollection.where('userId', '==', firebase.auth.currentUser.uid).onSnapshot(snapshot => {
          const usersPostsArray = []

          snapshot.forEach(post => {
            usersPostsArray.push(post.data());
          });
          usersPostsArray.sort((a, b) => b.date - a.date);
          commit('fetchUsersPosts', usersPostsArray);
        })
      } catch(err) {
        console.log(err.message);
      }
    }
  },
  modules: {
  }
})
