import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rooms/new',
    name: 'room-new',
    component: () => import(/* webpackChunkName: "roomNew" */ '@/views/roomNew.vue')
  },
  {
    path: '/rooms/:id',
    name: 'room-view',
    component: () => import(/* webpackChunkName: "room" */ '@/views/room.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
