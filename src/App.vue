// The global application component

<template>
  <div class="app" id="app">
    <app-header />
    <app-content />
    <app-footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer,
  }
}
</script>

<style lang="scss">
.app {
  display: grid;
  grid-template-rows: 50px 1fr 70px;
  height: 100vh;
  
  background: url(./assets/bg-main.jpg) center no-repeat;
  background-size: cover;
  position: relative;
}
</style>
