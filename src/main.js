import Vue from 'vue'
// Application component
import App from './App.vue'
// Vue global modules
import store from './store'
import router from './router'
// All global styles
import './styles/base.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
