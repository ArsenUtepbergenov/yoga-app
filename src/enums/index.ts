import { User } from '@/models'
import { FirebaseError } from 'firebase/app'

export const Pages = {
  PAGE_NOT_FOUND: '404',
  HOME: 'home',
  FORGOT_PASSWORD: 'forgot-password',
  PROFILE: 'profile',
}

export enum Codes {
  SUCCESS_SIGN_IN,
  ERROR_SIGN_IN,
  STATUS_REGISTRATION,
  ERROR_REGISTRATION,
  SUCCESS_LOGOUT,
  ERROR_LOGOUT,
}

const FirebaseErrorCodes = {
  'auth/user-not-found': 'Пользователь не существует.',
  'auth/wrong-password': 'Неверный пароль.',
  'auth/weak-password': 'Пароль должен иметь минимум 6 символов.',
  'auth/email-already-in-use': 'Пользователь уже существует.',
}

type indexErrorCode = keyof typeof FirebaseErrorCodes

export const Notifications = new Map()
Notifications.set(Codes.SUCCESS_SIGN_IN, (user: User) => {
  return {
    type: 'success',
    title: 'Успешный вход в систему',
    message: `Вы вошли как ${user?.email}`,
  }
})
Notifications.set(Codes.ERROR_SIGN_IN, (error: FirebaseError) => {
  return {
    type: 'error',
    title: 'Ошибка при попытке входа',
    message: FirebaseErrorCodes[error.code as indexErrorCode],
  }
})
Notifications.set(Codes.STATUS_REGISTRATION, (user: User) => {
  return {
    type: 'info',
    title: 'Статус регистрации',
    message: `Вы зарегистрированы как ${user?.email}`,
  }
})
Notifications.set(Codes.ERROR_REGISTRATION, (error: FirebaseError) => {
  return {
    type: 'error',
    title: 'Ошибка во время регистрации.',
    message: FirebaseErrorCodes[error.code as indexErrorCode],
  }
})
Notifications.set(Codes.SUCCESS_LOGOUT, () => {
  return {
    type: 'success',
    title: 'Успешно',
    message: `Вы успешно вышли из системы.`,
  }
})
Notifications.set(Codes.ERROR_LOGOUT, (message: string) => {
  return {
    type: 'error',
    title: 'Ошибка при попытке выхода.',
    message,
  }
})
