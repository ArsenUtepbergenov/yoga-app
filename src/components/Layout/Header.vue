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
    <div class="header-ref-links">
      <a-anchor-link href="#timetable" class="header-ref-link">
        <template #title> <CalendarOutlined />&nbsp;Расписание</template>
      </a-anchor-link>
      <a-anchor-link href="#price" class="header-ref-link" @click="test">
        <template #title><MoneyCollectOutlined />&nbsp;Цена</template>
      </a-anchor-link>
      <a-anchor-link href="#teachers" class="header-ref-link">
        <template #title><ContactsOutlined />&nbsp;Контакты</template>
      </a-anchor-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  CalendarOutlined,
  MoneyCollectOutlined,
  ContactsOutlined,
} from '@ant-design/icons-vue'
import appNavbar from './Navbar.vue'

function test(e: MouseEvent) {
  e.preventDefault()
  console.log()
}
</script>

<style lang="scss">
.header {
  min-height: var(--height-header);

  &-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 20%;
  }

  &-title {
    font-family: 'Fraunces', serif;
    color: white;
    font-size: 3rem;
    margin: 25px 0;
    max-width: 570px;
  }

  &-ref-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    position: absolute;
    bottom: 10px;
    gap: 10px;
  }

  .ant-anchor-link-title {
    color: var(--color-navbar-link);
    font-size: 1.2rem;
  }
}
</style>
