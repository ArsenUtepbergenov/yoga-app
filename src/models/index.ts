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

export type ReceivedUser = {
  displayName: string
  email: string
  photoURL: string
}

export type ExerciseEvent = {
  content: string
  type: 'warning' | 'success' | 'error'
}

export type User = FirebaseUser & { name: string }
export type UserWithRepeatedPassword = User & { repeatedPassword: string }
export type UserPhoto = { url: string; fileName: string }

// store states
export type AppState = {
  sections: {
    timetable: HTMLElement | null
    price: HTMLElement | null
    teachers: HTMLElement | null
  }
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

export type EventsState = {
  list: Map<number, ExerciseEvent[]>
}

// root
export type RootState = AppState &
  AuthState &
  NotificationState &
  ModalState &
  EventsState

// actions
export type AuthActionContext = ActionContext<AuthState, RootState>
export type ModalActionContext = ActionContext<ModalState, RootState>
export type EventsActionContext = ActionContext<EventsState, RootState>

import './notification'
