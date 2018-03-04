<template>
  <nav class="navbar">
    <div class="navbar-items">
      <span v-if="getStatusLogin" class="navbar-item">{{getCurrentUser.email}}</span>
      <router-link v-if="getStatusLogin" class="navbar-item navbar-link" to='/'>Rooms</router-link>
      <router-link v-if="!getStatusLogin" class="navbar-item navbar-link" to='/login'>Login</router-link>
      <router-link v-if="!getStatusLogin" class="navbar-item navbar-link" to='/register'>Register</router-link>
      <button v-if="getStatusLogin" class="navbar-item navbar-button" @click="signOut">Logout</button>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
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
    signOut() {
      this.logout();
    }
  },
}
</script>

<style lang="scss">
.navbar {
  height: 100%;

  &-items {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &-item {
    display: flex;
    align-items: center;
    padding: 0 1em;
    color: white;
    font-weight: bold;
  }

  &-link:hover {
    background-color: var(--color-navbar-link-hover);
  }

  &-button {
    border: 0;
    background-color: var(--color-logout-button);
  }
}
</style>
