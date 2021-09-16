import { createRouter, createWebHistory } from "vue-router"
import { Pages } from "@/enums"
// components
import Home from "@/views/Home.vue"
import PageNotFound from "@/views/PageNotFound.vue"

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: Pages.PAGE_NOT_FOUND,
    component: PageNotFound,
    meta: {
      title: "Opps!",
    },
  },
  {
    path: "/",
    name: Pages.HOME,
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/login",
    name: Pages.LOGIN,
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: Pages.REGISTER,
    component: () =>
      import(/* webpackChunkName: "register" */ "@/views/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: Pages.FORGOT_PASSWORD,
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "@/views/Forgot-password.vue"
      ),
    meta: {
      title: "Forgot Password",
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | Yoga Hall`
  next()
})

export default router
