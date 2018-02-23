<template>
  <div class="room-card">
    <router-link :to="{name: 'room-view', params: {id: room.id}}">
      <span class="room-card__title">{{room.title}}</span>
    </router-link>
    <p class="room-card__number-members">{{room.number_members}}</p>
  </div>
</template>

<script>
export default {
  props: {
    room: Object,
    required: true
  }
}
</script>

<style lang="scss">
</style>
