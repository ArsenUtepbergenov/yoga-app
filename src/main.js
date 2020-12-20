import { createApp } from 'vue'
// Application component
import App from './App.vue'
// Vue global modules
import store from './store'
import router from './router'
// All global styles
import './styles/base.scss'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
