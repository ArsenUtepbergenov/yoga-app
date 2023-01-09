<template>
  <nav class="navbar mobile">
    <div class="logo">
      <img src="/src/assets/logo.png" alt="logo" />
    </div>
    <div>
      <a-button
        v-if="!isLoggedIn"
        type="link"
        class="navbar-item navbar-link"
        @click="showAuthModal"
      >
        <login-outlined />&nbsp;Вход
      </a-button>
      <a-dropdown v-else class="navbar-menu">
        <a
          class="ant-dropdown-link"
          style="color: white; font-size: 1.2rem"
          @click.prevent
        >
          <span style="margin-right: 10px" v-if="!isMobile">
            {{ name }}
          </span>
          <UserOutlined />
        </a>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="PROFILE">
              <IdcardOutlined />
              Профиль
            </a-menu-item>
            <a-menu-item key="SETTINGS">
              <setting-outlined />
              Настройки
            </a-menu-item>
            <a-menu-item key="EXIT">
              <logout-outlined />
              Выход
            </a-menu-item>
          </a-menu>
        </template>
        <template #icon><UserOutlined /></template>
      </a-dropdown>
    </div>
  </nav>
  <a-modal
    :visible="isAuthModalVisible"
    width="360px"
    :footer="null"
    title="Авторизация"
    @cancel="hideAuthModal"
  >
    <a-tabs v-model:activeKey="activeKey" type="card" size="large" :tabBarGutter="2">
      <a-tab-pane key="1">
        <template #tab>
          <span>
            <user-outlined />
            Войти
          </span>
        </template>
        <login />
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span>
            <user-add-outlined />
            Регистрация
          </span>
        </template>
        <registration />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed, ref } from 'vue'
import Login from '../Login.vue'
import Registration from '../Registration.vue'
import {
  IdcardOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { Pages } from '@/enums'
import { MenuInfo, MenuKeys } from './layout.types'
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  mobile: 600,
})

const isMobile = breakpoints.smaller('mobile')

const store = useStore()
const router = useRouter()
const activeKey = ref('1')

function handleMenuClick({ key }: MenuInfo) {
  switch (MenuKeys[key]) {
    case MenuKeys.PROFILE:
      router.push({ name: Pages.PROFILE })
      break
    case MenuKeys.SETTINGS:
      router.push({ name: Pages.SETTINGS })
      break
    case MenuKeys.EXIT:
      store.dispatch('auth/logout')
      router.push({ name: Pages.HOME })
      break
  }
}

function showAuthModal() {
  store.dispatch('modal/showAuth')
}

function hideAuthModal() {
  store.dispatch('modal/hideAuth')
}

const isLoggedIn = computed(() => store.getters['auth/isLoggedIn'])
const name = computed(() => store.getters['auth/userName'])
const isAuthModalVisible = computed(() => store.getters['modal/isAuthVisible'])
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 32px;

  .ant-btn-link {
    color: var(--color-navbar-link);
    font-size: 1.2rem;
    padding: 0 10px;
  }
}
</style>
