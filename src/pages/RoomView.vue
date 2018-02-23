<template>
  <section class="room-view">
    <room-details :details="currentRoom" />
    <button type="button" @click="removeRoom">Detele</button>
    <input type="text" v-model="newTitleRoom" :placeholder="currentRoom.title" required>
    <button type="button" @click="changeTitleRoom">Update title</button>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import RoomDetails from '../components/RoomDetails'

export default {
  name: 'room-view',
  data() {
    return {
      newTitleRoom: ''
    }
  },
  components: {
    'room-details': RoomDetails
  },
  computed: {
    ...mapState([
      'currentRoom'
    ])
  },
  methods: {
    ...mapActions([
      'fetchRoom',
      'deleteRoom',
      'updateTitleRoom'
    ]),
    removeRoom() {
      this.deleteRoom(this.$route.params.id);
    },
    changeTitleRoom() {
      if (this.newTitleRoom !== '')
        this.updateTitleRoom({
          id: this.$route.params.id,
          title: this.newTitleRoom
        });
    }
  },
  created() {
    this.fetchRoom(this.$route.params.id);
  }
}
</script>

<style lang="scss">
.room-view {

}
</style>
