import { User } from '@/models'

export const Pages = {
  PAGE_NOT_FOUND: '404',
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  FORGOT_PASSWORD: 'forgot-password',
  PROFILE: 'profile',
}

export const PagesWithoutNav = [
  Pages.LOGIN,
  Pages.REGISTER,
  Pages.FORGOT_PASSWORD,
  Pages.PAGE_NOT_FOUND,
]

export enum Codes {
  SUCCESS_SIGN_IN,
  ERROR_SIGN_IN,
  STATUS_REGISTRATION,
  ERROR_REGISTRATION,
  SUCCESS_LOGOUT,
  ERROR_LOGOUT,
}

export const NotificationCodes = new Map()
NotificationCodes.set(Codes.SUCCESS_SIGN_IN, (user: User) => {
  return {
    type: 'success',
    title: 'Успешный вход в систему',
    message: `Вы вошли, как ${user?.email}`,
  }
})
NotificationCodes.set(Codes.ERROR_SIGN_IN, (message: string) => {
  return {
    type: 'error',
    title: 'Ошибка при попытке входа',
    message,
  }
})
NotificationCodes.set(Codes.STATUS_REGISTRATION, (user: User) => {
  return {
    type: 'info',
    title: 'Статус регистрации',
    message: `Вы зарегистрировались, как ${user?.email}`,
  }
})
NotificationCodes.set(Codes.ERROR_REGISTRATION, (message: string) => {
  return {
    type: 'error',
    title: 'Ошибка во время регистрации',
    message,
  }
})
NotificationCodes.set(Codes.SUCCESS_LOGOUT, () => {
  return {
    type: 'success',
    title: 'Успешно',
    message: `Вы вышли из системы`,
  }
})
NotificationCodes.set(Codes.ERROR_LOGOUT, (message: string) => {
  return {
    type: 'error',
    title: 'Ошибка при поытке выхода!',
    message,
  }
})
