import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue'
import { Pages } from '../constants'

const routes = [
  {
    path: '/',
    name: Pages.HOME,
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: Pages.LOGIN,
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: Pages.REGISTER,
    component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue'),
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/forgot-password',
    name: Pages.FORGOT_PASSWORD,
    component: () => import(/* webpackChunkName: "forgot-password" */ '@/views/forgot-password.vue'),
    meta: {
      title: 'Forgot Password'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Yoga Hall`
  next()
})

export default router
