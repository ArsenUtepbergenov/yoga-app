// The global application component

<template>
  <div class="app">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import appHeader from './components/Header'
import appMain from './components/Main'
import appFooter from './components/Footer'

export default {
  name: 'application',
  components: {
    appHeader,
    appMain,
    appFooter
  }
}
</script>
