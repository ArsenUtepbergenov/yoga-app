<template>
  <main class="main">
    <div class="main-message">
      <inline-message :message="getMessage" />
    </div>
    <router-view />
    <router-link v-if="getStatusLogin" class="main-rooms-new-link" to="/rooms/new">
      <i class="fas fa-plus main-icon"></i>
    </router-link>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'
import InlineMessage from './InlineMessage'

export default {
  components: {
    'inline-message': InlineMessage
  },
  computed: {
    ...mapGetters([
      'getStatusLogin',
      'getMessage'
    ])
  },
}
</script>

<style lang="scss">
.main {
  background: url(../assets/bg-main.jpg) center no-repeat;
  background-size: cover;
  position: relative;

  &-message {
    margin-bottom: 35px;
  }

  &-rooms-new-link {
    position: absolute;
    display: flex;
    height: 50px;
    width: 50px;
    right: 20px;
    bottom: 20px;
    background-color: var(--color-rooms-new-link);
    border-radius: 50%;
    z-index: 2;
  }

  &-icon {
    margin: auto;
  }
}
</style>
