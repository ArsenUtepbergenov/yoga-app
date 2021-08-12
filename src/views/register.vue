<template>
  <section id="register" class="register">
    <form class="form register" @submit.prevent="signUp">
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
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-key"></i>
        </label>
        <input class="form-input" type="password" v-model="passwordConfirmed" placeholder="Repeat password..." required>
      </div>
      <button class="btn btn-primary" type="submit">Register</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      email: null,
      password: null,
      passwordConfirmed: null
    }
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
