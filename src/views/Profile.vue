<template>
  <section class="container">
    <div class="profile mobile">
      <div class="avatar">
        <avatar :url="photoURL" />
      </div>
      <div class="info">
        <div>
          <a-typography-title :level="3">
            {{ name }}
          </a-typography-title>
          <a-typography-text type="secondary">Почта: {{ email }}</a-typography-text>
        </div>
      </div>
      <div class="courses">
        <a-typography-title :level="4">
          <a-typography-text type="secondary">Мои курсы</a-typography-text>
        </a-typography-title>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Avatar from '@/components/UI/Avatar.vue'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const name = computed(() => store.getters['auth/userName'])
const email = computed(() => store.getters['auth/userEmail'])
const photoURL = computed(() => store.getters['auth/userPhotoURL'] || '')
</script>

<style lang="scss">
.profile {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 160px 1fr;
  margin: 40px 60px 0 60px;
  gap: 20px;

  .info {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  .courses {
    grid-row: 2/3;
    grid-column: 2/3;
  }
}
</style>
