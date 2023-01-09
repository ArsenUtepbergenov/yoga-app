import { ActionContext } from 'vuex'
import { IconType as Type } from 'ant-design-vue/lib/notification'
import { Dayjs } from 'dayjs'

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

export type EventDate = {
  _id: string
  value: string
  from: string
  to: string
}

export type NewExerciseEvent = {
  id: number
  from: string
  to: string
  fromValue: Dayjs
  toValue: Dayjs
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
    forgotPassword: HTMLElement | null
    timetable: HTMLElement | null
    price: HTMLElement | null
    teachers: HTMLElement | null
  }
  anchorLinksVisible: boolean
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
  dates: EventDate[]
  list: Map<number, ExerciseEvent[]>
  newList: NewExerciseEvent[]
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
