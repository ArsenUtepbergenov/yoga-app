// The main view page

<template>
  <div id="home">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import appHeader from '@/components/Header'
import appMain from '@/components/Main'
import appFooter from '@/components/Footer'

export default {
  name: 'home',
  components: {
    appHeader,
    appMain,
    appFooter
  }
}
</script>
