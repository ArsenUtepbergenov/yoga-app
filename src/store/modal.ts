import { ModalActionContext, ModalState } from '@/models'
import store from '.'

const modalModule = {
  namespaced: true,
  state: {
    isAuthVisible: false,
  } as ModalState,
  mutations: {
    setAuth(state: ModalState, payload: boolean) {
      state.isAuthVisible = payload
    },
  },
  actions: {
    showAuth({ commit }: ModalActionContext) {
      commit('setAuth', true)
    },
    hideAuth({ commit }: ModalActionContext) {
      commit('setAuth', false)
    },
  },
  getters: {
    isAuthVisible: (state: ModalState) => state.isAuthVisible,
  },
}

export default modalModule

export const setAuthModal = (value: boolean) => store.commit('modal/setAuth', value)
