<template>
  <section  class="room-new">
    <form class="form rooms-new" @submit.prevent="saveRoom">
      <div class="form-field">
        <label class="form-label">Title</label>
        <input class="form-input" type="text" v-model="title" required>
      </div>
      <div class="form-field">
        <label class="form-label">Number members</label>
        <input class="form-input" type="number" v-model.number="number_members" required>
      </div>
      <div>
        <button class="form-button" type="submit">Add</button>
        <router-link class="form-button" to="/">Cancel</router-link>
      </div>
    </form>
  </section>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'room-new',
  data() {
    return {
      title: '',
      number_members: 0
    }
  },
  methods: {
    ...mapActions([
      'createRoom'
    ]),
    saveRoom() {
      this.createRoom({
        title: this.title,
        number_members: this.number_members
      });
    }
  }
}
</script>

<style lang="scss">
</style>
