<template>
  <section id="register-page" class="register-page">
    <form class="form register" @submit.prevent="signUp">
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
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-key fa-lg"></i>
        </label>
        <input class="form-input-icon" type="password" v-model="passwordConfirmed" placeholder="Repeat password..." required>
      </div>
      <button class="form-button" type="submit">Register</button>
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
