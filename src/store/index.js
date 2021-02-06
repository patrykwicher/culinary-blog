import { createStore } from 'vuex'
import * as firebase from '../firebase'
import router from '@/router/index'
import fb from 'firebase/app'

export default createStore({
  state: {
    toggleLogin: false,
    toggleRegistration: false,
    usersProfile: {},
    allPosts: [],
    xd: {}
  },
  getters: {
    usersPostsWithProperDateFormat: state => {
      const usersPosts = [];

      state.allPosts.forEach(post => {
        if(post.userId === firebase.auth.currentUser.uid) {
          usersPosts.push(post);
        }
      });

      return usersPosts;
    }
  },
  mutations: {
    setUsersProfile(state, userData) {
      state.usersProfile = userData;
    },
    fetchAllPosts(state, allPostsArray) {
      state.allPosts = allPostsArray;
    }
  },
  actions: {
    async signUp(context, signupForm) {
      try {
        const { user } = await firebase.auth.createUserWithEmailAndPassword(signupForm.email, signupForm.password);
        context.dispatch('saveToDataBase', { user, signupForm });
        router.push('/');
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
        context.dispatch('fetchAllPosts');
        router.push('/');
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
        commit('setUsersProfile', userData.data());
      } catch(err) {
        console.log(err.message);
      }
    },

    async logout({ commit }) {
      try {
        await firebase.auth.signOut();
        router.push('/');
        commit('setUsersProfile', {});
      } catch(err) {
        console.log(err.message);
      }
    },

    async createPost({ dispatch, state }, post) {
      try {
        await firebase.recipesCollection.add({
          date: fb.firestore.Timestamp.fromDate(new Date()),
          userId: firebase.auth.currentUser.uid,
          postTitle: post.title,
          postContent: post.content,
          userNickname: state.usersProfile.nickname
        });
        dispatch('fetchAllPosts');
      } catch(err) {
        console.log(err.message);
      }
    },

    async fetchAllPosts({ commit }) {
      try {
        firebase.recipesCollection.onSnapshot(snapshot => {
          const allPostsArray = [];

          snapshot.forEach(post => {
            allPostsArray.push(post.data());
          });
          allPostsArray.sort((a, b) => b.date - a.date);

          allPostsArray.forEach(post => {
            if(post.date.toDate().getDate() > 0 && post.date.toDate().getDate() < 10){
              if(post.date.toDate().getMonth() + 1 > 0 && post.date.toDate().getMonth() + 1 < 10) {
                post.date = `0${post.date.toDate().getDate()}-0${post.date.toDate().getMonth() + 1}-${post.date.toDate().getFullYear()}`;
              }
              else post.date = `0${post.date.toDate().getDate()}-${post.date.toDate().getMonth() + 1}-${post.date.toDate().getFullYear()}`;
            }
            else {
              if(post.date.toDate().getMonth() + 1 > 0 && post.date.toDate().getMonth() + 1 < 10) {
                post.date = `${post.date.toDate().getDate()}-0${post.date.toDate().getMonth() + 1}-${post.date.toDate().getFullYear()}`;
              }
              else post.date = `${post.date.toDate().getDate()}-${post.date.toDate().getMonth() + 1}-${post.date.toDate().getFullYear()}`;
            }
          });
          commit('fetchAllPosts', allPostsArray);
        });
      } catch(err) {
        console.log(err.message);
      }
    }
  },
  modules: {
  }
})
