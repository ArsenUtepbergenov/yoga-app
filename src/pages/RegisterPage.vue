<template>
  <section id="register-page" class="register-page">
    <form class="register-form" @submit.prevent="signUp">
      <label>Email</label>
      <input type="email" v-model="email" required>
      <label>Password</label>
      <input type="password" v-model="password" required>
      <label>Repeat password</label>
      <input type="password" v-model="passwordConfirmed" required>
      <button type="submit">Register</button>
    </form>
    <p>{{getErrorMessage}}</p>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      email: null,
      password: null,
      passwordConfirmed: null
    }
  },
  computed: {
    ...mapGetters([
      'getErrorMessage'
    ])
  },
  methods: {
    ...mapActions([
      'register',
    ]),
    signUp() {
      if (this.password === this.passwordConfirmed) {
        this.register({
          email: this.email,
          password: this.password
        });
      }
    }
  }
}
</script>

<style lang="scss">
.register-page {

}
</style>
