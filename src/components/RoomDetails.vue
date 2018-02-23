<template>
  <div class="room-details">
    Room title: {{details.title}},
    Number members in the room: {{details.number_members}}
  </div>
</template>

<script>
export default {
  props: {
    details: Object,
    required: true
  }
}
</script>

<style lang="scss">
</style>
