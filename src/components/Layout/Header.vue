<template>
  <header class="header">
    <div class="container">
      <app-navbar />
    </div>
    <video class="video" src="/src/assets/video.mp4" muted loop autoplay></video>
    <div class="container">
      <div class="header-content">
        <div class="header-title">
          Сфера Yoga Hall - ПЛАТФОРМА ДЛЯ ОНЛАЙН-ЗАНЯТИЙ по йоге и медитации
        </div>
        <a-button type="primary" size="large" class="btn btn-primary header-btn"
          >Записаться на урок
        </a-button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import appNavbar from './Navbar.vue'

export default defineComponent({
  name: 'app-header',
  components: {
    appNavbar,
  },
})
</script>
