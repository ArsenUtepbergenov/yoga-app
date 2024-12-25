import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from '@/models'
// modules
import authModule from './auth'
import notificationModule from './notification'
import modalModule from './modal'
import eventsModule from './events'

// global injection key
export const storeKey: InjectionKey<Store<RootState>> = Symbol()

const store = createStore<RootState>({
  state: {
    sections: {
      forgotPassword: null,
      timetable: null,
      price: null,
      teachers: null,
      contact: null,
    },
    anchorLinksVisible: false,
    setTariffPrice: 0,
  } as unknown as RootState,
  mutations: {
    setAnchorLinksVisible(state: RootState, payload: boolean) {
      state.anchorLinksVisible = payload
    },
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
    setTariffPrice(state: RootState, payload: number) {
      state.tariffPrice = payload
    },
  },
  actions: {},
  getters: {
    getSection: (state: RootState) => (key: keyof typeof state.sections) =>
      state.sections[key],
    anchorLinksVisible: (state: RootState) => state.anchorLinksVisible,
    tariffPrice: (state: RootState) => state.tariffPrice,
  },
  modules: {
    auth: authModule,
    notification: notificationModule,
    modal: modalModule,
    events: eventsModule,
  },
})

export default store

export function useStore() {
  return baseUseStore(storeKey)
}
