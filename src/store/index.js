import { Pages } from '@/constants'
import Vuex from 'vuex'
// api
import auth from '../api/auth'
import users from '../api/users'
import router from '../router'

const store = Vuex.createStore({
  state: {
    currentUser: {},
    isLoggedIn: false,
    message: ''
  },
  mutations: {
    setCurrentUser: (state, user) => {
      state.currentUser = user
    },
    setStatusLogin: (state, status) => {
      state.isLoggedIn = status
    },
    setMessage: (state, message) => {
      state.message = message
    },
    resetStateApp: state => {
      state.currentUser = {},
        state.isLoggedIn = false,
        state.message = ''
    }
  },
  actions: {
    login({ commit }, data) {
      auth.login(data)
        .then(({ user }) => {
          commit('setMessage', `You are logged in as ${user.email}`)
          router.push('/')
        })
        .catch(error => {
          commit('setMessage', error.message)
        })
    },

    register({ commit }, data) {
      auth.register(data)
        .then(({ user }) => {
          users.setUser({ name: data.name, email: data.email, uid: user.uid })
          router.push({ name: Pages.HOME })
        })
        .catch(error => {
          commit('setMessage', error.message)
        })
    },

    logout({ commit }) {
      auth.logout()
        .then(() => {
          console.log('User successfully logged out')
          router.push('/login')
        })
        .catch(error => {
          commit('setMessage', error.message)
        })
    }
  },
  getters: {
    getMessage: state => {
      return state.message
    },
    getCurrentUser: state => {
      return state.currentUser
    },
    getStatusLogin: state => {
      return state.isLoggedIn
    }
  }
})

export default store
