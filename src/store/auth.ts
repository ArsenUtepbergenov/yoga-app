import router from "../router"
import { Codes, NotificationCodes, Pages } from "@/enums"
import {
  AuthActionContext,
  AuthState,
  User,
  FirebaseUser,
  ReceivedUser,
} from "@/models"
// api
import { auth, db } from "@/firebase"
import store from "."

const type = "notification/set"

const authModule = {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false,
  } as AuthState,
  mutations: {
    setUser: (state: AuthState, user: ReceivedUser | null = null) =>
      (state.user = user),
    setLoggedIn: (state: AuthState, status: boolean) =>
      (state.isLoggedIn = status),
  },
  actions: {
    async login(
      { commit }: AuthActionContext,
      { email, password }: FirebaseUser
    ) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password)
        store.commit(type, NotificationCodes.get(Codes.SUCCESS_SIGNIN)(user))
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit(
          type,
          NotificationCodes.get(Codes.ERROR_SIGNIN)(error.message)
        )
      }
    },

    async register(
      { commit }: AuthActionContext,
      { name, email, password }: User
    ) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )
        const dataBase = db.collection("users").doc(user?.uid)
        await dataBase.set({ name, email, uid: user?.uid })
        store.commit(
          type,
          NotificationCodes.get(Codes.STATUS_REGISTRATION)(user)
        )
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit(
          type,
          NotificationCodes.get(Codes.ERROR_REGISTRATION)(error.message)
        )
      }
    },

    async logout({ commit }: AuthActionContext) {
      try {
        await auth.signOut()
        store.commit(type, NotificationCodes.get(Codes.SUCCESS_LOGOUT)())
      } catch (error) {
        store.commit(
          type,
          NotificationCodes.get(Codes.ERROR_LOGOUT)(error.message)
        )
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
