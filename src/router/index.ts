import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Pages } from '@/enums'
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

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Yoga Hall`
  next()
})

export default router
