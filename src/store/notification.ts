import { NotificationState, Notification } from '@/models'

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
