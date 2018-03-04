import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

import 'normalize.css'
import './scss/base.scss'

import {mapMutations} from 'vuex'
import {auth} from './firebase'

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store,
  methods: {
    ...mapMutations([
      'setCurrentUser',
      'setStatusLogin',
      'resetStateApp'
    ]),
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setCurrentUser(user);
        this.setStatusLogin(true);
      }
      else
        this.resetStateApp();
    });
  },
})
