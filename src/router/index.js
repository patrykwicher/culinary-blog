import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main-dishes',
    name: 'Main Dishes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainDishes.vue')
  },
  {
    path: '/desserts',
    name: 'Desserts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Desserts.vue')
  },
  {
    path: '/salads',
    name: 'Salads',
    component: () => import(/* webpackChunkName: "about" */ '../views/Salads.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user-panel',
    name: 'User Panel',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPanel.vue')
  },
  {
    path: '/register',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
