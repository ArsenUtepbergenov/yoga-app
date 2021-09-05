// The header application component

<template>
  <header class="header">
    <section class="container">
      <app-navbar />
    </section>
    <video class="video" src="@/assets/video.mp4" muted loop autoplay></video>
    <section>
      <div class="header-title">
        Сфера Yoga Hall - ПЛАТФОРМА ДЛЯ ОНЛАЙН-ЗАНЯТИЙ по йоге и медитации
      </div>
      <button class="btn btn-primary header-btn">Записаться на урок</button>
    </section>
  </header>
</template>

<script lang="ts">
import appNavbar from './Navbar.vue'

export default {
  name: 'app-header',
  components: {
    appNavbar
  }
}
</script>
