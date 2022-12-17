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
    <div class="navbar-items">
      <a href="#timetable" class="navbar-link"><CalendarOutlined />&nbsp;Расписание</a>
      <a href="#price" class="navbar-link"><MoneyCollectOutlined />&nbsp;Цена</a>
      <a href="#teachers" class="navbar-link"><ContactsOutlined />&nbsp;Контакты</a>
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
</script>
