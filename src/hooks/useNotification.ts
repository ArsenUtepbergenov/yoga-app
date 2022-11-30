import { Notification } from '@/models'
import { useStore } from '@/store'
import { notification } from 'ant-design-vue'
import { watch } from 'vue'

export default function useNotification() {
  const store = useStore()

  watch(
    () => store.getters['notification/length'],
    () => {
      const notifications = store.getters['notification/notifications'] as Notification[]

      for (const item of notifications) {
        notification[item.type]({
          message: item.title,
          description: item.message,
        })
      }

      store.commit('notification/reset')
    },
  )
}
