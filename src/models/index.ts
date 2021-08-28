import { ActionContext } from "vuex"

export type FBUser = {
  email: string
  password: string
}

export type User = FBUser & { name: string }

export type AppState = {
  currentUser: {}
  message: string
}

export type AuthState = {
  isLoggedIn: boolean
}

export type Context = ActionContext<AuthState, AppState>
