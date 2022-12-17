import router from '../router'
import { Codes, Notifications, Pages } from '@/enums'
import {
  AuthActionContext,
  AuthState,
  User,
  FirebaseUser,
  ReceivedUser,
} from '@/models'
// api
import { auth, db, login, registration, logout } from '@/firebase'
import { addDoc, collection } from 'firebase/firestore'

const type = 'notification/set'

const authModule = {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false,
  } as AuthState,
  mutations: {
    setUser: (state: AuthState, user: ReceivedUser | null = null) =>
      (state.user = user),
    setLoggedIn: (state: AuthState, status: boolean) => (state.isLoggedIn = status),
  },
  actions: {
    async login({ commit }: AuthActionContext, { email, password }: FirebaseUser) {
      try {
        const { user } = await login(auth, email, password)
        commit(type, Notifications.get(Codes.SUCCESS_SIGN_IN)(user), { root: true })
        router.push({ name: Pages.HOME })
      } catch (error) {
        commit(type, Notifications.get(Codes.ERROR_SIGN_IN)(error), {
          root: true,
        })
      }
    },

    async registration({ commit }: AuthActionContext, { name, email, password }: User) {
      try {
        const { user } = await registration(auth, email, password)
        const docRef = await addDoc(collection(db, 'users'), {
          _id: user.uid,
          name,
          email,
        })
        console.log('Document written with ID: ', docRef.id)

        commit(type, Notifications.get(Codes.STATUS_REGISTRATION)(user), {
          root: true,
        })
        router.push({ name: Pages.HOME })
      } catch (error) {
        commit(type, Notifications.get(Codes.ERROR_REGISTRATION)(error), {
          root: true,
        })
      }
    },

    async logout({ commit }: AuthActionContext) {
      try {
        await logout(auth)
        commit(type, Notifications.get(Codes.SUCCESS_LOGOUT)(), {
          root: true,
        })
      } catch (error) {
        commit(type, Notifications.get(Codes.ERROR_LOGOUT)(error.message), {
          root: true,
        })
      }
    },
  },
  getters: {
    isLoggedIn: (state: AuthState) => state.isLoggedIn,
    user: (state: AuthState) => state.user,
    userName: (state: AuthState) => state.user?.displayName,
    userEmail: (state: AuthState) => state.user?.email,
  },
}

export default authModule
