// The header application component

<template>
  <header class="header">
    <section class="container">
      <app-navbar />
    </section>
  </header>
</template>

<script>
import appNavbar from './Navbar'

export default {
  name: 'app-header',
  components: {
    appNavbar
  }
}
</script>
