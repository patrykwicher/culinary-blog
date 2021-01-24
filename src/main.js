import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import '@/assets/css-files/scss-config.scss'

let app;
auth.onAuthStateChanged(user => {
    console.log(user);
    app = createApp(App);
    app.use(store).use(router).mount('#app');
})
