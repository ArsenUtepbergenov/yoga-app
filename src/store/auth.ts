import router from '../router'
import { Codes, NotificationCodes, Pages } from '@/enums'
import { AuthActionContext, AuthState, User, FirebaseUser, ReceivedUser } from '@/models'
import store from '.'
// api
import { auth, db } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

const type = 'notification/set'

const authModule = {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false,
  } as AuthState,
  mutations: {
    setUser: (state: AuthState, user: ReceivedUser | null = null) => (state.user = user),
    setLoggedIn: (state: AuthState, status: boolean) => (state.isLoggedIn = status),
  },
  actions: {
    async login({ commit }: AuthActionContext, { email, password }: FirebaseUser) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        store.commit(type, NotificationCodes.get(Codes.SUCCESS_SIGN_IN)(user))
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit(type, NotificationCodes.get(Codes.ERROR_SIGN_IN)(error.message))
      }
    },

    async register({ commit }: AuthActionContext, { name, email, password }: User) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        const docRef = await addDoc(collection(db, 'users'), {
          _id: user.uid,
          name,
          email,
        })
        console.log('Document written with ID: ', docRef.id)

        store.commit(type, NotificationCodes.get(Codes.STATUS_REGISTRATION)(user))
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit(type, NotificationCodes.get(Codes.ERROR_REGISTRATION)(error.message))
        console.error('Error during register: ', error)
      }
    },

    async logout({ commit }: AuthActionContext) {
      try {
        await signOut(auth)
        store.commit(type, NotificationCodes.get(Codes.SUCCESS_LOGOUT)())
      } catch (error) {
        store.commit(type, NotificationCodes.get(Codes.ERROR_LOGOUT)(error.message))
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
