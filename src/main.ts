import { createApp } from "vue"
// Application component
import App from "./App.vue"
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
      .use(store, storeKey)
      .mount("#app")
    isInitApp = true
  }
})
