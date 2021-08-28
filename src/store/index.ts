import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { AppState } from "@/models"
// modules
import authModule from "./auth"

// global injection key
export const storeKey: InjectionKey<Store<AppState>> = Symbol()

const store = createStore<AppState>({
  state: {
    currentUser: {},
    message: "",
  } as AppState,
  mutations: {
    setCurrentUser: (state: AppState, user) => (state.currentUser = user),
    setMessage: (state: AppState, payload: string) => (state.message = payload),
  },
  actions: {},
  getters: {
    message: (state: AppState) => state.message,
    currentUser: (state: AppState) => state.currentUser,
  },
  modules: {
    auth: authModule,
  },
})

export default store

export function useStore() {
  return baseUseStore(storeKey)
}
