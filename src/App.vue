// The global application component

<template>
  <div class="app">
    <app-header v-if="!navigation" />
    <router-view />
    <app-footer v-if="!navigation" />
  </div>
</template>

<script lang="ts">
import { appHeader, appFooter } from '@/components/Layout'
import { Pages } from '@/enums'
import { useNotification } from './hooks'
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'application',
  setup() {
    let navigation = ref<boolean>(false)
    const route = useRoute()

    function checkRoute() {
      const routeName = route.name
      const isRouteWithoutNav =
        routeName === Pages.LOGIN ||
        routeName === Pages.REGISTER ||
        routeName === Pages.FORGOT_PASSWORD

      if (isRouteWithoutNav) {
        navigation.value = true
        return
      }

      navigation.value = false
    }

    watch(route, () => checkRoute())

    useNotification()

    return {
      navigation
    }
  },
  components: {
    appHeader,
    appFooter
  },
})
</script>