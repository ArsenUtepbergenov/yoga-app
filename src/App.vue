<template>
  <div class="app">
    <app-header v-if="navigation" />
    <router-view />
    <app-footer v-if="navigation" />
    <go-to-top-button v-if="navigation" />
  </div>
</template>

<script lang="ts">
import { goToTopButton } from '@/components/UI/Buttons'
import { appHeader, appFooter } from '@/components/Layout'
import { useNotification } from './hooks'
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PagesWithoutNav } from '@/enums'

export default defineComponent({
  name: 'application',
  setup() {
    const navigation = ref<boolean>(false)
    const route = useRoute()

    function checkRoute() {
      if (PagesWithoutNav.includes(route.name as string)) {
        navigation.value = false
        return
      }

      navigation.value = true
    }

    watch(route, () => checkRoute(), { immediate: true })

    useNotification()

    return {
      navigation,
    }
  },
  components: {
    appHeader,
    appFooter,
    goToTopButton,
  },
})
</script>
