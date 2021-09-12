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
      <router-link
        v-else
        class="navbar-item navbar-link"
        :to="{ name: 'home' }"
        @click="logout"
      >
        <UserDeleteOutlined />&nbsp;Выход
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'
import { CalendarOutlined, MoneyCollectOutlined, ContactsOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons-vue'

export default {
  name: 'app-navbar',
  setup () {
    const store = useStore()

    return {
      logout: () => store.dispatch('auth/logout'),
      isLoggedIn: computed(() => store.getters['auth/isLoggedIn'])
    }
  },
  components: {
    CalendarOutlined,
    MoneyCollectOutlined,
    ContactsOutlined,
    UserAddOutlined,
    UserDeleteOutlined
  },
}
</script>
