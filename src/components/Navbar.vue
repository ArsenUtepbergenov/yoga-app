// The top main navbar component

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="navbar-items">
      <a href="#" class="navbar-link"><i class="fas fa-calendar-alt"></i>&nbsp;Расписание</a>
      <a href="#price" class="navbar-link"><i class="fas fa-hand-holding-usd"></i>&nbsp;Цена</a>
      <a href="#" class="navbar-link"><i class="fas fa-envelope-open-text"></i>&nbsp;Контакты</a>
      <router-link class="navbar-item navbar-link" to='/login'>
        <i class="fas fa-user-circle"></i>&nbsp;Вход
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app-navbar',
  computed: {
    ...mapGetters([
      'getCurrentUser',
      'getStatusLogin'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    signOut () {
      this.logout()
    }
  }
}
</script>
