import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import '@/assets/css-files/scss-config.scss'

let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    app = createApp(App);
    app.use(store).use(router).mount('#app');
  }

  if (user) {
    store.dispatch('fetchUserData', user);
  }
})
