import { Codes } from '@/enums'
import { AuthState, User, FirebaseUser, ReceivedUser } from '@/models'
// api
import { auth, db, login, registration, logout } from '@/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { setNotification } from './notification'
import { setModalLogin } from './modal'

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
    async login(_: unknown, { email, password }: FirebaseUser) {
      try {
        const { user } = await login(auth, email, password)
        setNotification(Codes.SUCCESS_SIGN_IN, user as ReceivedUser)
        setModalLogin(false)
      } catch (error) {
        setNotification(Codes.ERROR_SIGN_IN, error as FirebaseError)
      }
    },

    async registration(_: unknown, { name, email, password }: User) {
      try {
        const { user } = await registration(auth, email, password)
        const docRef = await addDoc(collection(db, 'users'), {
          _id: user.uid,
          name,
          email,
        })
        console.log('Document written with ID: ', docRef.id)
        setNotification(Codes.STATUS_REGISTRATION, user as ReceivedUser)
      } catch (error) {
        setNotification(Codes.ERROR_REGISTRATION, error as FirebaseError)
      }
    },

    async logout() {
      try {
        await logout(auth)
        setNotification(Codes.SUCCESS_LOGOUT)
      } catch (error) {
        setNotification(Codes.ERROR_LOGOUT, error as FirebaseError)
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
