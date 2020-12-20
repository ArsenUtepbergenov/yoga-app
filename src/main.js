import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'
import './scss/base.scss'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
