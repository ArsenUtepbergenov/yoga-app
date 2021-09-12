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
        store.commit("notification/set", {
          type: "success",
          title: "Успешный вход в систему",
          message: `Вы вошли, как ${user?.email}`,
        })
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit("notification/set", {
          type: "error",
          title: "Ошибка при попытке входа",
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
        store.commit("notification/set", {
          type: "info",
          title: "Статус регистрации",
          message: `Вы зарегистрировались, как ${user?.email}`,
        })
        router.push({ name: Pages.HOME })
      } catch (error) {
        store.commit("notification/set", {
          type: "error",
          title: "Ошибка во время регистрации",
          message: error.message,
        })
      }
    },

    async logout({ commit }: AuthActionContext) {
      try {
        await auth.signOut()
        store.commit("notification/set", {
          type: "success",
          title: "Успешно",
          message: `Вы вышли из системы`,
        })
      } catch (error) {
        store.commit("notification/set", {
          type: "error",
          title: "Ошибка при поытке выхода!",
          message: error.message,
        })
      }
    },
  },
  getters: {
    isLoggedIn: (state: AuthState) => state.isLoggedIn,
  },
}

export default authModule
