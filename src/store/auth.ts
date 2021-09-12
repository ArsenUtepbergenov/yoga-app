import router from "../router"
import { Pages } from "@/enums"
import { AuthActionContext, AuthState, User, FirebaseUser } from "@/models"
// api
import { auth, db } from "@/firebase"
import store from "."

const authModule = {
  namespaced: true,
  state: {
    isLoggedIn: false,
  } as AuthState,
  mutations: {
    setLoggedIn: (state: AuthState, payload: boolean) =>
      (state.isLoggedIn = payload),
  },
  actions: {
    async login(
      { commit }: AuthActionContext,
      { email, password }: FirebaseUser
    ) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password)
        store.commit("notification/set", {
          type: "info",
          title: "Login Status",
          message: `You are logged in as ${user?.email}`,
        })
        commit("setLoggedIn", true)
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit("notification/set", {
          type: "error",
          title: "Login Status",
          message: error.message,
        })
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
        store.commit("setMessage", `You are registered as ${user?.email}`)
        commit("setLoggedIn", true)
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit("setMessage", error.message)
      }
    },

    async logout({ commit }: AuthActionContext) {
      try {
        await auth.signOut()
        store.commit("setMessage", `You have successfully logged out`)
        commit("setLoggedIn", false)
        router.push({ name: Pages.LOGIN })
      } catch (error) {
        store.commit("setMessage", error.message)
      }
    },
  },
  getters: {
    statusLogin: (state: AuthState) => state.isLoggedIn,
  },
}

export default authModule
