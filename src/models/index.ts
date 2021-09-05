import { ActionContext } from "vuex"

export type FirebaseUser = {
  email: string
  password: string
}

export type User = FirebaseUser & { name: string }

export type AppState = {
  message: string
}

export type AuthState = {
  isLoggedIn: boolean
}

export type RootState = AppState & AuthState

export type AuthActionContext = ActionContext<AuthState, RootState>
