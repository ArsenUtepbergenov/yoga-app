import { createApp } from 'vue'
// Application component
import Antd from 'ant-design-vue'
import application from './App.vue'
import 'ant-design-vue/dist/antd.css'
// Vue global modules
import { auth } from '@/firebase'
import store, { storeKey } from '@/store'
import router from '@/router'
// All global styles
import '@/styles/base.scss'

let isInitApp = false

auth.onAuthStateChanged((user: any) => {
  if (!isInitApp) {
    createApp(application).use(Antd).use(router).use(store, storeKey).mount('#app')
    isInitApp = true
  }
  if (user) {
    store.commit('auth/setUser', user)
    store.commit('auth/setLoggedIn', true)
  } else {
    store.commit('auth/setUser', null)
    store.commit('auth/setLoggedIn', false)
  }
})
