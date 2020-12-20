<template>
  <section id="login" class="login">
    <form class="form login" @submit.prevent="signIn">
      <i class="fas fa-user-circle fa-3x form-icon"></i>
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-envelope fa-lg"></i>
        </label>
        <input class="form-input-icon" type="email" v-model="email" placeholder="Email..." required>
      </div>
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-key fa-lg"></i>
        </label>
        <input class="form-input-icon" type="password" v-model="password" placeholder="Password..." required>
      </div>
      <button class="form-button" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
import {mapActions} from 'vuex'

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
      });
    }
  }
}
</script>
