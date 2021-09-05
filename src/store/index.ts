import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { RootState } from "@/models"
// modules
import authModule from "./auth"
import notificationModule from "./notification"

// global injection key
export const storeKey: InjectionKey<Store<RootState>> = Symbol()

const store = createStore<RootState>({
  state: {
    message: "",
  } as RootState,
  mutations: {
    setMessage: (state: RootState, payload: string) =>
      (state.message = payload),
  },
  actions: {},
  getters: {
    message: (state: RootState) => state.message,
  },
  modules: {
    auth: authModule,
    notification: notificationModule,
  },
})

export default store

export function useStore() {
  return baseUseStore(storeKey)
}
