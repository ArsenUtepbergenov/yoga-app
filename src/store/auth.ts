import router from "../router"
import { Pages } from "@/constants"
import { Context, AuthState, User, FBUser } from "@/models"
// api
import { auth, db } from "@/firebase"

const authModule = {
  namespaced: true,
  state: {
    isLoggedIn: false,
  } as AuthState,
  mutations: {},
  actions: {
    async login({ commit }: Context, { email, password }: FBUser) {
      try {
        const respons = await auth.signInWithEmailAndPassword(email, password)
        console.log(respons)
        const { user } = respons
        commit("setMessage", `You are logged in as ${user?.email}`)
        router.push({ name: Pages.HOME })
      } catch (error) {
        commit("setMessage", error.message)
      }
    },

    async register({ commit }: Context, { name, email, password }: User) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )
        const dataBase = db.collection("users").doc(user?.uid)
        await dataBase.set({ name, email, uid: user?.uid })
        commit("setMessage", `You are registered as ${user?.email}`)
        router.push({ name: Pages.HOME })
      } catch (error) {
        commit("setMessage", error.message)
      }
    },

    async logout({ commit }: Context) {
      try {
        await auth.signOut()
        commit("setMessage", `You have successfully logged out`)
        router.push({ name: Pages.LOGIN })
      } catch (error) {
        commit("setMessage", error.message)
      }
    },
  },
  getters: {
    statusLogin: (state: AuthState) => state.isLoggedIn,
  },
}

export default authModule
