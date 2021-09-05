import { Store } from "vuex"
import { ComponentCustomProperties } from "vue"
import { RootState } from "@/models"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}
