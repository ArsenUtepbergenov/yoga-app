<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/logo.png" alt="logo" />
    </div>
    <div>
      <a-button
        v-if="!isLoggedIn"
        type="link"
        class="navbar-item navbar-link"
        @click="showModalLogin"
      >
        <login-outlined />&nbsp;Вход
      </a-button>
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
  <a-modal
    :visible="isModalLoginVisible"
    width="360px"
    :footer="null"
    title="Авторизация"
    @cancel="hideModalLogin"
  >
    <login />
  </a-modal>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed, VNodeChild } from 'vue'
import Login from './Login.vue'
import {
  IdcardOutlined,
  UserOutlined,
  LoginOutlined,
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

function showModalLogin() {
  store.dispatch('modal/showLogin')
}

function hideModalLogin() {
  store.dispatch('modal/hideLogin')
}

const isLoggedIn = computed(() => store.getters['auth/isLoggedIn'])
const email = computed(() => store.getters['auth/userEmail'])
const isModalLoginVisible = computed(() => store.getters['modal/isLoginVisible'])
</script>
