import Vuex from 'vuex'

import services from './services'
import auth from './auth'
import router from '../router'

const store = new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: {},
    currentUser: {},
    isLoggedIn: false,
    message: 'Join us!'
  },
  mutations: {
    setRooms: (state, data) => {
      state.rooms = data
    },
    setCurrentRoom: (state, data) => {
      state.currentRoom = data
    },
    setNewTitleRoom: (state, title) => {
      state.currentRoom.title = title
    },
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
      state.rooms = []
      state.currentRoom = {},
      state.currentUser = {},
      state.isLoggedIn = false,
      state.message = 'Join us!'
    }
  },
  actions: {
    login(context, data) {
      const {email, password} = data
      auth.login(email, password)
        .then(user => {
          context.commit('setMessage', `You are logged in as ${user.email}`)
          router.push('/')
        })
        .catch(error => {
          context.commit('setMessage', error.message)
        })
    },

    register(context, data) {
      const {email, password} = data
      auth.register(email, password)
        .then(user => {
          context.commit('setMessage', `Account created for ${user.email}`)
          router.push('/')
        })
        .catch(error => {
          context.commit('setMessage', error.message)
        })
    },

    logout({commit}) {
      auth.logout()
        .then(() => {
          console.log('User successfully logged out')
          router.push('/login')
        })
        .catch(error => {
          commit('setMessage', error.message)
        })
    },

    fetchRooms({commit}) {
      let data = []

      services.fetchRooms()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const dataDoc = {
              id: doc.id, ...doc.data()
            }
            data.push(dataDoc)
          })

          commit('setRooms', data)
        })
        .catch(error => {
          console.error('Error fetch rooms collection: ', error)
        })
    },

    fetchRoom(context, id) {
      services.fetchRoom(id)
        .then(doc => {
          if (doc.exists)
            context.commit('setCurrentRoom', doc.data())
          else
            console.log('No such document!')
        })
        .catch(error => {
          console.error('Error fetch room document: ', error)
        })
    },

    createRoom(context, data) {
      services.createRoom(data)
        .then(docRef => {
          console.log('Document written with ID: ', docRef.id)
          context.commit('setMessage', 'The room successfully created')
          router.push('/')
        })
        .catch(error => {
          console.error('Error add room document: ', error)
        })
    },

    deleteRoom(context, id) {
      services.deleteRoom(id)
        .then(() => {
          context.commit('setMessage', 'The room successfully deleted!')
          context.commit('setCurrentRoom', {})
          router.push('/')
        })
        .catch(error => console.error('Error removing document: ', error))
    },

    updateTitleRoom(context, data) {
      services.updateTitleRoom(data)
        .then(() => {
          context.commit('setMessage', 'Title of the room successfully updated!')
          context.commit('setNewTitleRoom', data.title)
        })
        .catch(error => {
          console.error('Error updating document: ', error)
        })
    }
  },
  getters: {
    getRoomsCount: state => {
      return state.rooms.length
    },
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
