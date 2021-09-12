import { ActionContext } from "vuex"
import { IconType as Type } from "ant-design-vue/lib/notification"

// base
export type FirebaseUser = {
  email: string
  password: string
}

export type Notification = {
  type: Type
  title: string
  message: string
}

export type User = FirebaseUser & { name: string }
export type UserWithRepeatedPassword = User & { repeatedPassword: string }

// store states
export type AppState = {
  message: string
}

export type AuthState = {
  isLoggedIn: boolean
}

export type NotificationState = {
  notifications: Notification[]
}

// root
export type RootState = AppState & AuthState & NotificationState

// actions
export type AuthActionContext = ActionContext<AuthState, RootState>
