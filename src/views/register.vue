<template>
  <section id="register" class="register">
    <form class="form register" @submit.prevent="signUp">
      <h3>Создайте свой Yoga Hall аккаунт</h3>
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-user"></i>
        </label>
        <input class="form-input" type="text" v-model="username" placeholder="Имя..." required>
      </div>
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
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-key"></i>
        </label>
        <input class="form-input" type="password" v-model="passwordConfirmed" placeholder="Повторите пароль..." required>
      </div>
      <button class="btn btn-primary" type="submit">Создать</button>
      <p>
        <router-link :to="{ name: 'login' }">
          Уже имеете аккаунт?
        </router-link>
      </p>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: null,
      password: null,
      passwordConfirmed: null,
    }
  },
  computed: {
    ...mapGetters({
      message: 'getMessage'
    })
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    async signUp() {
      if (this.password === this.passwordConfirmed) {
        this.errorMsg = ''
        this.register({
          name: this.username,
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>
