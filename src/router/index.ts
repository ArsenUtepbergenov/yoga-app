import {
  createRouter,
  createWebHistory,
  RouteRecordName,
  RouteRecordRaw,
} from 'vue-router'
import { Pages } from '@/enums'
import store from '@/store'
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
    path: '/registration',
    name: Pages.REGISTRATION,
    component: () => import('@/views/Registration.vue'),
    meta: {
      title: 'Registration',
    },
  },
  {
    path: '/forgot-password',
    name: Pages.FORGOT_PASSWORD,
    component: () => import('@/views/ForgotPassword.vue'),
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

const publicPages: RouteRecordName[] = [Pages.LOGIN, Pages.REGISTRATION]

router.beforeEach((to, _, next) => {
  const isPublicPage = publicPages.includes(to.name as RouteRecordName)
  const isLoggedIn = store.getters['auth/isLoggedIn']

  if (isPublicPage) {
    next()
  } else if (!isPublicPage && !isLoggedIn) {
    next({ name: Pages.LOGIN })
  } else {
    next()
  }

  document.title = `${to.meta.title} | Yoga Hall`
})

export default router
