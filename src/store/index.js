import Vuex from 'vuex'
// api
import auth from './auth'
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
    login (commit, data) {
      const {email, password} = data
      auth.login(email, password)
        .then(user => {
          commit('setMessage', `You are logged in as ${user.email}`)
          router.push('/')
        })
        .catch(error => {
          commit('setMessage', error.message)
        })
    },

    register (commit, data) {
      const {email, password} = data
      auth.register(email, password)
        .then(user => {
          commit('setMessage', `Account created for ${user.email}`)
          router.push('/')
        })
        .catch(error => {
          commit('setMessage', error.message)
        })
    },

    logout (commit) {
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
