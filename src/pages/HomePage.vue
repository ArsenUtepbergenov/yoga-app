<template>
  <section id="home-page" class="home-page">
    <p>Rooms count: {{getRoomsCount}}</p>
    <rooms-grid :rooms="rooms" />
  </section>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import RoomsGrid from '../components/RoomsGrid'

export default {
  name: 'home-page',
  components: {
    'rooms-grid': RoomsGrid
  },
  computed: {
    ...mapState([
      'rooms'
    ]),
    ...mapGetters([
      'getRoomsCount'
    ])
  },
  methods: {
    ...mapActions([
      'fetchRooms'
    ]),
  },
  created() {
    this.fetchRooms();
  }
}
</script>

<style lang="scss">
.home-page {

}
</style>
