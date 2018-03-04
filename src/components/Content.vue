<template>
  <main class="main">
    <router-view />
    <router-link class="main-rooms-new-link" to="/rooms/new"><i class="fas fa-plus main-icon"></i></router-link>
  </main>
</template>

<style lang="scss">
.main {
  background: url(../assets/bg-main.jpg) center no-repeat;
  background-size: cover;
  position: relative;
  padding: 25px 0;

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
