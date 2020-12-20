<template>
  <section class="room-view">
    <div class="room-view-details">
      <div class="room-view-left">
        <img class="room-view-img" :src="currentRoom.coverPath" alt="">
        <div class="room-view-info">
          <span class="room-view-item">
            <i class="fas fa-users fa-lg"></i>
            {{currentRoom.number_members}}
          </span>
          <span class="room-view-item">
            <i class="fas fa-heart fa-lg"></i>
            {{currentRoom.likes}}
          </span>
          <button class="room-view-button-edit" type="button" @click="showModal=true">
            <i class="fas fa-edit fa-lg"></i>
          </button>
        </div>
      </div>
      <div class="room-view-right">
        <p class="room-view-title">
          {{currentRoom.title}}
        </p>
        <audio-player :tracks="currentRoom.tracks" />
      </div>
    </div>
    <modal v-if="showModal" @close="showModal=false">
      <template #header>
        <h3>Settings the room</h3>
      </template>
      <template #body>
        <input type="text" v-model="newTitleRoom" :placeholder="currentRoom.title" required>
      </template>
      <template #footer>
        <button class="button-circle" type="button" @click="changeTitleRoom">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="button-circle" type="button" @click="removeRoom">
          <i class="fas fa-trash-alt"></i>
        </button>
      </template>
    </modal>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import AudioPlayer from '@/components/AudioPlayer'
import Modal from '@/components/Modal'

export default {
  name: 'room',
  data() {
    return {
      newTitleRoom: '',
      showModal: false
    }
  },
  components: {
    'audio-player': AudioPlayer,
    'modal': Modal,
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
  position: relative;

  &-details {
    width: 100%;
    max-width: 1000px;
    background-color: white;
    margin: auto;
    border-radius: 5px;
    display: flex;
  }

  &-left {
    width: 270px;
  }

  &-right {
    width: 100%;
  }

  &-title {
    font-size: 2em;
    color: #989898;
    text-align: center;
  }

  &-info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
    height: 50px;
    margin-left: 10px;
  }

  &-item {
    color: #989898;
  }

  &-item .fa-users, .fa-heart {
    padding: 0 5px;
  }

  &-img {
    width: 250px;
    height: 250px;
    border-radius: 5px;
    margin: 10px;
  }

  &-button-edit {
    background: 0;
    border: 0;
    color: #989898;
    padding-bottom: 5px;
  }
}
</style>
