import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage'
import RoomView from '../pages/RoomView'
import RoomNew from '../pages/RoomNew'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

import {auth} from '../firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rooms/new',
    name: 'room-new',
    component: RoomNew,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rooms/:id',
    name: 'room-view',
    component: RoomView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: {
      requiresGuest: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    else
      next();
  }
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (auth.currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    }
    else
      next();
  }
  else
    next();
});

export default router;
