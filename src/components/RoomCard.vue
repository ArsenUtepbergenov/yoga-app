<template>
  <div class="room-card">
    <img class="room-card-cover" :src=room.coverPath alt="">
    <div class="room-card-items">
      <p class="room-card-title">
        {{room.title}}
      </p>
      <p class="room-card-item">
        <a href="#" class="room-card-link">
          <i class="fas fa-backward fa-lg"></i>
        </a>
        <a href="#" class="room-card-link">
          <i class="fas fa-play fa-2x"></i>
        </a>
        <a href="#" class="room-card-link">
          <i class="fas fa-forward fa-lg"></i>
        </a>
      </p>
      <div class="room-card-item">
        <p class="room-card-members">
          <i class="fas fa-users"></i>
          <span>{{room.number_members}}</span>
        </p>
        <p class="room-card-likes">
          <i class="fas fa-thumbs-up"></i>
          <span>{{room.likes}}</span>
        </p>
        <p>
          <router-link class="room-card-link" :to="{name: 'room-view', params: {id: room.id}}">
            <i class="fas fa-external-link-alt"></i>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    room: Object
  }
}
</script>

<style lang="scss">
.room-card {
  height: 220px;
  width: 220px;
  border-radius: 5px;
  position: relative;

  &-cover {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    filter: blur(1px);
  }

  &-title {
    letter-spacing: 2px;
    font-size: 1.5em;
    margin: 0;
    padding: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &-link {
    color: white;
    text-decoration: none;
  }

  &-items {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  &-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
}
</style>
