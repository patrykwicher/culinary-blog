import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { auth } from '../firebase'

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
    component: () => import('../views/Desserts.vue')
  },
  {
    path: '/salads',
    name: 'Salads',
    component: () => import('../views/Salads.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user-panel',
    name: 'User Panel',
    component: () => import('../views/UserPanel.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/post/:postId',
    name: 'Post View',
    component: () => import('../views/PostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(path => path.meta.requiresAuth);

  if(requiresAuth && !auth.currentUser) {
    next('/');
  }
  else {
    next();
  }
})

export default router
