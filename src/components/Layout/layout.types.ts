import { VNodeChild } from 'vue'

export const MenuKeys = {
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  EXIT: 'Exit',
}

export interface MenuInfo {
  key: keyof typeof MenuKeys
  keyPath: string[]
  item: VNodeChild
  domEvent: MouseEvent
}
