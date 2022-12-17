import { Notifications } from '@/enums'
import { NotificationState, Notification, ReceivedUser } from '@/models'
import { FirebaseError } from 'firebase/app'
import store from '.'

const notificationModule = {
  namespaced: true,
  state: {
    notifications: [] as Notification[],
  } as NotificationState,
  mutations: {
    set(state: NotificationState, notifivation: Notification) {
      state.notifications = [...state.notifications, notifivation]
    },
    reset(state: NotificationState) {
      state.notifications = [] as Notification[]
    },
  },
  actions: {},
  getters: {
    notifications: (state: NotificationState) => state.notifications,
    length: (state: NotificationState) => state.notifications.length,
  },
}

export default notificationModule

export const setNotification = (code: number, payload?: ReceivedUser | FirebaseError) =>
  store.commit('notification/set', Notifications.get(code)(payload))
