<template>
  <div class="app">
    <app-header />
    <section class="container">
      <breadcrumbs />
    </section>
    <router-view />
    <app-footer />
    <go-to-top />
  </div>
</template>

<script setup lang="ts">
import goToTop from '@/components/UI/GoToTop.vue'
import breadcrumbs from '@/components/UI/Breadcrumbs.vue'
import AppHeader from '@/components/Layout/Header.vue'
import AppFooter from '@/components/Layout/Footer.vue'
import { useNotification } from './hooks'
import 'dayjs/locale/ru'
import dayjs from 'dayjs'
dayjs.locale('ru')

useNotification()
</script>
