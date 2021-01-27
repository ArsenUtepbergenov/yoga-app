// The header application component

<template>
  <header class="header">
    <section class="container">
      <app-navbar />
    </section>
    <video class="video" src="../assets/video.mp4" muted loop autoplay></video>
    <section>
      <div class="header-title">
        Сфера Yoga Hall - ПЛАТФОРМА ДЛЯ ОНЛАЙН-ЗАНЯТИЙ по йоге и медитации
      </div>
      <button class="header-sign-up-to-lesson-button">Записаться на урок</button>
    </section>
  </header>
</template>

<script>
import appNavbar from './Navbar'

export default {
  name: 'app-header',
  components: {
    appNavbar
  }
}
</script>
