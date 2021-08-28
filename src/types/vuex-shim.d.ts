import { Store } from "vuex"
import AppState from "@/store"
import { ComponentCustomProperties } from "vue"

declare module "@vue/runtime-core" {
  interface State extends AppState {}

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
