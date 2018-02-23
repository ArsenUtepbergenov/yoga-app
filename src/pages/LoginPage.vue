<template>
  <section id="login-page" class="login-page">
    <form class="login-form" @submit.prevent="signIn">
      <label>Email</label>
      <input type="email" v-model="email" required>
      <label>Password</label>
      <input type="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
    <p>{{getErrorMessage}}</p>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapGetters([
      'getErrorMessage'
    ])
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    signIn() {
      this.login({
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style lang="scss">
.login-page {

}
</style>
