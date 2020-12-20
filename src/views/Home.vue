<template>
  <section id="home" class="home">
    <rooms-grid :rooms="rooms" />
  </section>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import RoomsGrid from '@/components/RoomsGrid'

export default {
  name: 'home',
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
