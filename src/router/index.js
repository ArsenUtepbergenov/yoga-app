import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase'
import Home from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rooms/new',
    name: 'room-new',
    component: () => import(/* webpackChunkName: "RoomNew" */ '../pages/RoomNew.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rooms/:id',
    name: 'room-view',
    component: () => import(/* webpackChunkName: "RoomView" */ '../pages/RoomView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "LoginPage" */ '../pages/LoginPage.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "RegisterPage" */ '../pages/RegisterPage.vue'),
    meta: {
      requiresGuest: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    else
      next()
  }
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (auth.currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
    else
      next()
  }
  else
    next()
})

export default router
