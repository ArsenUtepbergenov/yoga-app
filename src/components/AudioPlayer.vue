<template>
  <audio :src="currentTrack" controls>
  </audio>
</template>

<script>
export default {
  name: 'audio-player',
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentTrack() {
      return this.tracks[0];
    },
  },
}
</script>

<style lang="scss">
</style>
