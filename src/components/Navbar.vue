<template>
  <nav class="navbar">
    <span v-if="getStatusLogin">{{getCurrentUser.email}}</span>
    <router-link v-if="getStatusLogin" to='/'>Home</router-link>
    <router-link v-if="!getStatusLogin" to='/login'>Login</router-link>
    <router-link v-if="!getStatusLogin" to='/register'>Register</router-link>
    <button v-if="getStatusLogin" type="button" @click="signOut">Logout</button>
  </nav>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'navbar',
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

}
</style>
