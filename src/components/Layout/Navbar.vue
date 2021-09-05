// The top main navbar component

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="navbar-items">
      <a href="#timetable" class="navbar-link"><i class="fas fa-calendar-alt"></i>&nbsp;Расписание</a>
      <a href="#price" class="navbar-link"><i class="fas fa-hand-holding-usd"></i>&nbsp;Цена</a>
      <a href="#teachers" class="navbar-link"><i class="fas fa-envelope-open-text"></i>&nbsp;Контакты</a>
      <router-link class="navbar-item navbar-link" :to="{ name: 'login' }">
        <i class="fas fa-user-circle"></i>&nbsp;Вход
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from '@/store'

export default {
  name: 'app-navbar',
  setup () {
    const store = useStore()

    return {
      logout: () => store.dispatch('auth/logout')
    }
  }
}
</script>
