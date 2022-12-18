import { ActionContext } from 'vuex'
import { IconType as Type } from 'ant-design-vue/lib/notification'

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
export type AppState = {}

export type ReceivedUser = {
  displayName: string
  email: string
}

export type AuthState = {
  user: ReceivedUser
  isLoggedIn: boolean
}

export type NotificationState = {
  notifications: Notification[]
}

export type ModalState = {
  isAuthVisible: boolean
}

// root
export type RootState = AppState & AuthState & NotificationState & ModalState

// actions
export type AuthActionContext = ActionContext<AuthState, RootState>
export type ModalActionContext = ActionContext<ModalState, RootState>

import './notification'
