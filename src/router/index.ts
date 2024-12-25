import {
  createRouter,
  createWebHistory,
  RouteRecordName,
  RouteRecordRaw,
} from 'vue-router'
import { Pages } from '@/enums'
import Home from '@/views/HomePage.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import store from '@/store'

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
    path: '/forgot-password',
    name: Pages.FORGOT_PASSWORD,
    component: () => import('@/views/ForgotPassword.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isLoggedIn']) next()
      else next({ name: Pages.HOME })
    },
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
  {
    path: '/settings',
    name: Pages.SETTINGS,
    component: () => import('@/views/Settings.vue'),
    meta: {
      title: 'Settings',
    },
  },
  {
    path: '/stream',
    name: Pages.STREAM,
    component: () => import('@/views/Stream.vue'),
    meta: {
      title: 'Live stream',
    },
  },
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const privatePages: RouteRecordName[] = [Pages.PROFILE, Pages.SETTINGS]

router.beforeEach((to, _, next) => {
  const isPrivatePage = privatePages.includes(to.name as RouteRecordName)
  const isLoggedIn = store.getters['auth/isLoggedIn']

  if (isPrivatePage && !isLoggedIn) {
    next({ name: Pages.HOME })
  } else {
    document.title = `${to.meta.title} | Yoga Hall`
    next()
  }
})

export default router
