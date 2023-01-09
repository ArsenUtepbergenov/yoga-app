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
          >Записаться на занятие
        </a-button>
      </div>
    </div>
    <div v-if="refLinksVisible" class="ref-links" @click="handleScrollTo">
      <a class="ref-link" data-to="timetable"><CalendarOutlined />&nbsp;Расписание</a>
      <a class="ref-link" data-to="price"><MoneyCollectOutlined />&nbsp;Цена</a>
      <a class="ref-link" data-to="teachers"><ContactsOutlined />&nbsp;Контакты</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useScroll } from '@/hooks'
import { useStore } from '@/store'
import {
  CalendarOutlined,
  MoneyCollectOutlined,
  ContactsOutlined,
} from '@ant-design/icons-vue'
import appNavbar from './Navbar.vue'

const scroll = useScroll()
const store = useStore()

const refLinksVisible = computed(() => store.getters['anchorLinksVisible'])

function handleScrollTo(event: Event) {
  const target = event.target as HTMLElement
  let toElement = null

  if (target.tagName === 'A' && target.classList.contains('ref-link')) {
    if ('to' in target.dataset) {
      toElement = store.getters['getSection'](target.dataset.to)
    }
  }

  scroll.to(toElement)
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

  .ref-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    position: absolute;
    bottom: 10px;
    gap: 20px;
  }

  .ref-link {
    color: var(--color-navbar-link);
    font-size: 1.2rem;
  }
}
</style>
