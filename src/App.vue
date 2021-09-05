// The global application component

<template>
  <div class="app">
    <app-header v-if="!navigation" />
    <router-view />
    <app-footer v-if="!navigation" />
  </div>
</template>

<script>
import { appHeader, appFooter } from '@/components/Layout'
import { Pages } from './constants'

export default {
  name: 'application',
  data() {
    return {
      navigation: false
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
