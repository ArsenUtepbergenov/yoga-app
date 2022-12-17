import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from '@/models'
// modules
import authModule from './auth'
import notificationModule from './notification'
import modalModule from './modal'

// global injection key
export const storeKey: InjectionKey<Store<RootState>> = Symbol()

const store = createStore<RootState>({
  state: {} as RootState,
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: authModule,
    notification: notificationModule,
    modal: modalModule,
  },
})

export default store

export function useStore() {
  return baseUseStore(storeKey)
}
