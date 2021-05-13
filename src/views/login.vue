<template>
  <section id="login" class="login">
    <form class="form" @submit.prevent="signIn">
      <div class="form-header" />
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-envelope"></i>
        </label>
        <input class="form-input" type="email" v-model="email" placeholder="Email..." required>
      </div>
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-key"></i>
        </label>
        <input class="form-input" type="password" v-model="password" placeholder="Password..." required>
      </div>
      <button class="form-button" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    signIn() {
      this.login({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
