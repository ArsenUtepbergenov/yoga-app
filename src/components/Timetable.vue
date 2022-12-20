<template>
  <div class="container">
    <h2 class="title">Расписание</h2>
    <a-calendar v-model:value="value">
      <template #dateCellRender="{ current }">
        <ul class="events">
          <li v-for="item in getListData(current)" :key="item.content">
            <a-badge :status="item.type" :text="item.content" />
          </li>
        </ul>
      </template>
      <template #monthCellRender="{ current }">
        <div v-if="getNumberEventsByMonth(current)" class="notes-month">
          <span>Занятий: {{ getNumberEventsByMonth(current) }}</span>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { Dayjs } from 'dayjs'
import { useStore } from '@/store'

const store = useStore()
const value = ref<Dayjs>()

onMounted(() => fetch())

async function fetch() {
  await store.dispatch('events/fetch')
}

const list = computed(() => store.getters['events/list'])

function getListData(value: Dayjs) {
  return list.value.get(value.date()) || []
}

function getNumberEventsByMonth(value: Dayjs) {
  if (value.month() === 8) {
    return 12
  }
}
</script>

<style lang="scss" scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  width: 100%;
}
.notes-month {
  margin-left: 10px;
  font-size: 1rem;
  color: var(--color-primary);
}
</style>
