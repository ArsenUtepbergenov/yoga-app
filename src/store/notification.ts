import { NotificationState, Notification } from "@/models"

const notificationModule = {
  namespaced: true,
  state: {
    notifications: [] as Notification[],
  } as NotificationState,
  mutations: {
    set(state: NotificationState, notifivation: Notification) {
      state.notifications = [...state.notifications, notifivation]
    },
  },
  actions: {},
  getters: {
    notifications: (state: NotificationState) => state.notifications,
  },
}

export default notificationModule
