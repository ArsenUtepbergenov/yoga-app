// The top main navbar component

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="navbar-items">
      <a href="#timetable" class="navbar-link"><CalendarOutlined />&nbsp;Расписание</a>
      <a href="#price" class="navbar-link"><MoneyCollectOutlined />&nbsp;Цена</a>
      <a href="#teachers" class="navbar-link"><ContactsOutlined />&nbsp;Контакты</a>
      <router-link
        v-if="!isLoggedIn"
        class="navbar-item navbar-link"
        :to="{ name: 'login' }"
      >
        <UserAddOutlined />&nbsp;Вход
      </router-link>
      <a-dropdown-button type="primary" v-else class="navbar-menu">
        {{ email }}
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
      </a-dropdown-button>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, computed, VNodeChild, watch } from 'vue'
import { IdcardOutlined, UserOutlined, CalendarOutlined, MoneyCollectOutlined, ContactsOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { Pages } from '@/enums'

const MenuKeys = {
  PROFILE: 'Profile',
  EXIT: 'Exit'
}

interface MenuInfo {
  key: keyof typeof MenuKeys
  keyPath: string[]
  item: VNodeChild
  domEvent: MouseEvent
}

export default defineComponent({
  name: 'app-navbar',
  setup () {
    const store = useStore()
    const router = useRouter()

    const handleMenuClick = ({ key }: MenuInfo) => {
      switch (MenuKeys[key]) {
        case MenuKeys.PROFILE:
          router.push({ name: Pages.PROFILE })
          break
        case MenuKeys.EXIT:
          store.dispatch('auth/logout')
          break
      }
    }

    return {
      isLoggedIn: computed(() => store.getters['auth/isLoggedIn']),
      email: computed(() => store.getters['auth/userEmail']),
      handleMenuClick,
    }
  },
  components: {
    CalendarOutlined,
    MoneyCollectOutlined,
    ContactsOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserOutlined,
    IdcardOutlined
  }
})
</script>

<style lang="scss">
.navbar {
  .navbar-menu {
    .ant-btn-primary {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
      font-weight: bold;
      background: transparent;
      border: 1px;
      font-size: 20px;
    }
  }
}
</style>