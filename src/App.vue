<template>
  <div ref="appRef" class="app">
    <app-header />
    <section class="container">
      <breadcrumbs />
    </section>
    <router-view />
    <app-footer />
    <go-to-top :element="(appRef as HTMLElement)" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import goToTop from '@/components/UI/GoToTop.vue'
import breadcrumbs from '@/components/UI/Breadcrumbs.vue'
import AppHeader from '@/components/Layout/Header.vue'
import AppFooter from '@/components/Layout/Footer.vue'
import { useNotification } from './hooks'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'
import { useRouter, RouterView } from 'vue-router'
import { Pages } from './enums'
import { useStore } from './store'
dayjs.locale('ru')

const appRef = ref<HTMLElement>()
const route = useRouter()
const store = useStore()

useNotification()

watch(
  () => route.currentRoute.value,
  value => {
    if (value.name === Pages.HOME) {
      store.commit('setAnchorLinksVisible', true)
      fetchEvents()
      return
    }
    store.commit('setAnchorLinksVisible', false)
  },
  { immediate: true },
)

async function fetchEvents() {
  await store.dispatch('events/fetch')
}
</script>
