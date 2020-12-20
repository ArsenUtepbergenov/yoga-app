<template>
  <audio :src="currentTrack" controls>
  </audio>
</template>

<script>
export default {
  name: 'audio-player',
  props: {
    tracks: {
      type: Array
    }
  },
  computed: {
    currentTrack() {
      return this.tracks && this.tracks.length && this.tracks[0]
    }
  }
}
</script>
