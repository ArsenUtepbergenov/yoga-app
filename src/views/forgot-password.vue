<template>
  <section id="forgot-password">
    <form class="form">
      <div class="form-field">
        <h2>Сбросить пароль</h2>
      </div>
      <div class="form-field">
        <p>Введите свою почту</p>
      </div>
      <div class="form-field">
        <label class="form-label-icon">
          <i class="fas fa-envelope"></i>
        </label>
        <input class="form-input" type="email" v-model="email" placeholder="Почта..." required>
      </div>
      <button class="btn btn-primary" type="submit">Сбросить</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'forgot-password',
  data() {
    return {
      email: null
    }
  }
}
</script>
