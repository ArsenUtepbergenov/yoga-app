// The global application component

<template>
  <div class="app">
    <app-header v-if="!navigation" />
    <router-view />
    <app-footer v-if="!navigation" />
  </div>
</template>

<script>
import appHeader from '@/components/Header'
import appFooter from '@/components/Footer'
import { Pages } from './constants'

export default {
  name: 'application',
  data() {
    return {
      navigation: null
    }
  },
  created() {
    this.checkRoute()
  },
  methods: {
    checkRoute() {
      const routeName = this.$route.name
      const isRouteWithoutNav =
        routeName === Pages.LOGIN ||
        routeName === Pages.REGISTER ||
        routeName === Pages.FORGOT_PASSWORD

      if (isRouteWithoutNav) {
        this.navigation = true
        return
      }

      this.navigation = false
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>
