import { createApp } from "vue"
// Application component
import Antd from "ant-design-vue"
import App from "./App.vue"
import "ant-design-vue/dist/antd.css"
// Vue global modules
import { auth } from "@/firebase"
import store, { storeKey } from "@/store"
import router from "@/router"
// All global styles
import "@/styles/base.scss"

let isInitApp = false

auth.onAuthStateChanged(() => {
  if (!isInitApp) {
    createApp(App)
      .use(router)
      .use(Antd)
      .use(store, storeKey)
      .mount("#app")
    isInitApp = true
  }
})
