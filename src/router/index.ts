import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Pages } from '@/enums'
import store from '@/store'
// components
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: Pages.PAGE_NOT_FOUND,
    component: PageNotFound,
    meta: {
      title: 'Opps!',
    },
  },
  {
    path: '/',
    name: Pages.HOME,
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/login',
    name: Pages.LOGIN,
    component: () => import('@/views/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/register',
    name: Pages.REGISTER,
    component: () => import('@/views/Register.vue'),
    meta: {
      title: 'Register',
    },
  },
  {
    path: '/forgot-password',
    name: Pages.FORGOT_PASSWORD,
    component: () => import('@/views/Forgot-password.vue'),
    meta: {
      title: 'Forgot Password',
    },
  },
  {
    path: '/profile',
    name: Pages.PROFILE,
    component: () => import('@/views/Profile.vue'),
    meta: {
      title: 'Profile',
    },
  },
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLoginPage = to.name === Pages.LOGIN
  const isLoddedIn = store.getters['auth/isLoggedIn']
  if (!isLoddedIn && !isLoginPage) next({ name: Pages.LOGIN })
  else next()
  // update the title
  document.title = `${to.meta.title} | Yoga Hall`
})

export default router
