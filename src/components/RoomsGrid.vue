<template>
  <div class="rooms-grid">
    <room-card v-for="(room, index) in rooms" :key="index" :room="room" />
  </div>
</template>

<script>
import RoomCard from './RoomCard'

export default {
  components: {
    'room-card': RoomCard
  },
  props: {
    rooms: Array,
    required: true
  }
}
</script>

<style lang="scss">
</style>
