<template>
  <div class="app">
    <app-header />
    <breadcrumbs />
    <router-view />
    <app-footer />
    <go-to-top />
  </div>
</template>

<script setup lang="ts">
import goToTop from '@/components/UI/GoToTop.vue'
import breadcrumbs from '@/components/UI/Breadcrumbs.vue'
import { appHeader, appFooter } from '@/components/Layout'
import { useNotification } from './hooks'

useNotification()
</script>
