<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/logo.png" alt="logo" />
    </div>
    <div>
      <router-link
        v-if="!isLoggedIn"
        class="navbar-item navbar-link"
        :to="{ name: 'login' }"
      >
        <UserAddOutlined />&nbsp;Вход
      </router-link>
      <a-dropdown v-else class="navbar-menu">
        <a
          class="ant-dropdown-link"
          style="color: white; font-size: 1.2rem"
          @click.prevent
        >
          {{ email }}
          <UserOutlined />
        </a>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="PROFILE">
              <IdcardOutlined />
              Профиль
            </a-menu-item>
            <a-menu-item key="EXIT">
              <UserDeleteOutlined />
              Выход
            </a-menu-item>
          </a-menu>
        </template>
        <template #icon><UserOutlined /></template>
      </a-dropdown>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed, VNodeChild } from 'vue'
import {
  IdcardOutlined,
  UserOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { Pages } from '@/enums'

const MenuKeys = {
  PROFILE: 'Profile',
  EXIT: 'Exit',
}

interface MenuInfo {
  key: keyof typeof MenuKeys
  keyPath: string[]
  item: VNodeChild
  domEvent: MouseEvent
}

const store = useStore()
const router = useRouter()

function handleMenuClick({ key }: MenuInfo) {
  switch (MenuKeys[key]) {
    case MenuKeys.PROFILE:
      router.push({ name: Pages.PROFILE })
      break
    case MenuKeys.EXIT:
      store.dispatch('auth/logout')
      break
  }
}

const isLoggedIn = computed(() => store.getters['auth/isLoggedIn'])
const email = computed(() => store.getters['auth/userEmail'])
</script>
