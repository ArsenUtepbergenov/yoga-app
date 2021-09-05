import { useStore } from "@/store"
import { notification } from "ant-design-vue"
import { watch } from "vue"

export default function useNotification() {
  const store = useStore()

  watch(
    () => store.getters["message"],
    (description) => {
      notification["info"]({
        message: "Information",
        description,
      })
    }
  )
}
