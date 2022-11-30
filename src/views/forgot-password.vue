<template>
  <section id="forgot-password">
    <modal v-if="modalActive" @close-modal="closeModal" />
    <spinner v-if="isLoading" />
    <form class="form">
      <div class="form-field">
        <h3>Сбросить пароль</h3>
      </div>
      <div class="form-field">
        <p>Введите свою почту</p>
      </div>
      <div class="form-field">
        <label class="form-label-icon"> </label>
        <input class="form-input" type="email" v-model="email" placeholder="Почта..." required />
      </div>
      <button class="btn btn-primary" type="submit">Сбросить</button>
    </form>
  </section>
</template>

<script>
import Modal from '../components/UI/Modal'
import Spinner from '../components/UI/Spinner'

export default {
  name: 'Forgot-password',
  data() {
    return {
      email: null,
      modalActive: false,
      isLoading: false,
    }
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ''
    },
  },
  components: {
    Modal,
    Spinner,
  },
}
</script>
