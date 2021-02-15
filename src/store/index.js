import { createStore } from 'vuex'
import * as firebase from '../firebase'
import router from '@/router/index'
import fb from 'firebase/app'

export default createStore({
  state: {
    usersProfile: {},
    allPosts: [],
    increment: 1,
    selectedPost: {}
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
    },
  },
  mutations: {
    setUsersProfile(state, userData) {
      state.usersProfile = userData;
    },
    fetchAllPosts(state, allPostsArray) {
      state.allPosts = allPostsArray;
    },
    increment(state) {
      state.increment++;
    },
    setSelectedPost(state, selectedPost) {
      state.selectedPost = selectedPost;
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

    async createPost({ dispatch, state, commit }, post) {
      try {

        const createdPost = {
          date: fb.firestore.Timestamp.fromDate(new Date()),
          userId: firebase.auth.currentUser.uid,
          postTitle: post.title,
          postContent: post.content,
          userNickname: state.usersProfile.nickname,
          dishType: post.dishType
        };

        await firebase.storageReference.child('post-images/' + state.increment + post.imageData.name).put(post.imageData);
        const getDownloadUrlOfPostImage = await firebase.storageReference.child('post-images/' + state.increment + post.imageData.name).getDownloadURL();
        createdPost.imageUrl = getDownloadUrlOfPostImage;
        await firebase.recipesCollection.add(createdPost);

        commit('increment');
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
    },
    async getPostData({ commit }, postData) {
      try {
        let tempPost = {};
        let properPost = [];

        if(postData.imageUrl) {
          tempPost = await firebase.recipesCollection.where('imageUrl', '==', postData.imageUrl).get();
        }
        else if(postData.title) {
          tempPost = await firebase.recipesCollection.where('postTitle', '==', postData.title).get();
        }

        tempPost.forEach(post => {
          properPost.push(post.data());
          properPost[0].postId = post.id;
        })

        commit('setSelectedPost', properPost[0]);
        router.push({ path: `/post/${properPost[0].postId}`});
      } catch(err) {
        console.log(err.message);
      }
    }
  },
  modules: {
  }
})
