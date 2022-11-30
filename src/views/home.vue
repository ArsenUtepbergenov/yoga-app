// The main view page

<template>
  <div id="home">
    <app-main />
  </div>
</template>

<script>
import appMain from '@/components/Main'

export default {
  name: 'Home',
  components: {
    appMain,
  },
}
</script>
