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
  grid-template-areas: "header"
                       "main"
                       "footer";
  grid-template: 50px 700px 150px / 1fr;
}
</style>
