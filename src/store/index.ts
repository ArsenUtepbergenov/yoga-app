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
  state: {
    sections: {
      timetable: null,
      price: null,
      teachers: null,
    },
  } as RootState,
  mutations: {
    setSections(
      state: RootState,
      elements: { key: keyof typeof state.sections; element: HTMLElement }[],
    ) {
      elements.forEach(({ key, element }) => (state.sections[key] = element))
    },
    setSection(
      state: RootState,
      { key, element }: { key: keyof typeof state.sections; element: HTMLElement },
    ) {
      state.sections[key] = element
    },
  },
  actions: {},
  getters: {
    getSection: (state: RootState) => (key: keyof typeof state.sections) =>
      state.sections[key],
  },
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
