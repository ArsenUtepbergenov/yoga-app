// The header application component

<template>
	<header class="header">
		<section class="container">
			<app-navbar />
		</section>
		<video class="video" src="@/assets/video.mp4" muted loop autoplay></video>
		<section class="container header-content">
			<div class="header-title">
				Сфера Yoga Hall - ПЛАТФОРМА ДЛЯ ОНЛАЙН-ЗАНЯТИЙ по йоге и медитации
			</div>
			<a-button type="primary" size="large" class="btn btn-primary header-btn"
				>Записаться на урок
			</a-button>
		</section>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import appNavbar from './Navbar.vue'

export default defineComponent({
  name: "app-header",
	components: {
		appNavbar
	}
})
</script>