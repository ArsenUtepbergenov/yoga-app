import { ModalActionContext, ModalState } from '@/models'
import store from '.'

const modalModule = {
  namespaced: true,
  state: {
    isLoginVisible: false,
  } as ModalState,
  mutations: {
    setLogin(state: ModalState, payload: boolean) {
      state.isLoginVisible = payload
    },
  },
  actions: {
    showLogin({ commit }: ModalActionContext) {
      commit('setLogin', true)
    },
    hideLogin({ commit }: ModalActionContext) {
      commit('setLogin', false)
    },
  },
  getters: {
    isLoginVisible: (state: ModalState) => state.isLoginVisible,
  },
}

export default modalModule

export const setModalLogin = (value: boolean) => store.commit('modal/setLogin', value)
