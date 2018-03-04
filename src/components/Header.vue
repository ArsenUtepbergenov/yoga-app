<template>
  <header class="header">
    <app-navbar />
  </header>
</template>

<script>
import Navbar from './Navbar'

export default {
  components: {
    'app-navbar': Navbar
  }
}
</script>

<style lang="scss">
.header {
  background-color: #2d2d2d;
}
</style>
