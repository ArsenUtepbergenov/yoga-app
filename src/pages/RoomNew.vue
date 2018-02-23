<template>
  <section  class="room-new">
    <form class="room-new-form" @submit.prevent="saveRoom">
      <label>Title</label>
      <input type="text" v-model="title" required>
      <label>Number members</label>
      <input type="number" v-model.number="number_members" required>
      <button type="submit">Add</button>
      <router-link to="/">Cancel</router-link>
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
