<template>
  <section id="login" class="login">
    <form class="form" @submit.prevent="signIn">
      <div class="login-form-header" />
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-envelope"></i>
        </label>
        <input class="form-input" type="email" v-model="email" placeholder="Почта..." required>
      </div>
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-key"></i>
        </label>
        <input class="form-input" type="password" v-model="password" placeholder="Пароль..." required>
      </div>
      <button class="btn btn-primary" type="submit">Войти</button>
      <p>
        <router-link :to="{ name: routeRegister }">
          Ещё не зарегистрированы?
        </router-link>
      </p>
      <p>
        <router-link :to="{ name: routeForgotPassword }">
          Забыли свой пароль?
        </router-link>
      </p>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { Pages } from '../constants'

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    routeRegister() { return Pages.REGISTER },
    routeForgotPassword() { return Pages.FORGOT_PASSWORD }
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
