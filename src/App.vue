<template>
  <div id="app">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Content from './components/content'

export default {
  name: 'app',
  components: {
    Navbar,
    Content
  }
}
</script>

<style lang="scss">
</style>
