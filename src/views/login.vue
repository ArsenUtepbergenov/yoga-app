<template>
  <section id="login" class="login">
    <form class="form" @submit.prevent="login">
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

<script lang="ts">
import { ref, computed } from 'vue'
import { Pages } from '@/enums'
import { useStore } from '@/store'

export default {
  name: 'Login',
  setup () {
    const store = useStore()
    const email = ref('')
    const password = ref('')

    return {
      email,
      password,
      routeRegister: computed(() => Pages.REGISTER),
      routeForgotPassword: computed(() => Pages.FORGOT_PASSWORD),
      login: async () => await store.dispatch('auth/login', { email: email.value, password: password.value })
    }
  }
}
</script>
