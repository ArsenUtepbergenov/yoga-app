<template>
  <div class="container">
    <h2 class="title">Расписание</h2>
    <template v-if="isTablet">
      <ul class="events tablet">
        <li v-for="item in getListData(selectedValue)" :key="item.content">
          <a-badge :text="item.content" />
        </li>
      </ul>
    </template>
    <div class="tablet">
      <a-calendar v-model:value="date" :fullscreen="!isTablet" @select="handleSelect">
        <template #dateCellRender="{ current }">
          <ul class="events">
            <li v-for="item in getListData(current)" :key="item.content">
              <span v-if="isTablet" class="blank"></span>
              <a-badge v-else :text="item.content" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { useStore } from '@/store'
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  tablet: 899,
})

const isTablet = breakpoints.smaller('tablet')

const selectedValue = ref(dayjs(''))
const store = useStore()
const date = ref<Dayjs>()

const list = computed(() => store.getters['events/list'])

function handleSelect(value: Dayjs) {
  selectedValue.value = value
}

function getListData(value: Dayjs) {
  return list.value.get(value.date()) || []
}

function getNumberEventsByMonth(value: Dayjs) {
  if (value.month() === 8) {
    return 12
  }
}
</script>

<style lang="scss">
.events {
  list-style: none;
  margin: 0;
  padding: 0;
  .ant-badge-status {
    width: 100%;
  }
  .ant-badge {
    .ant-badge-status-text {
      font-size: 12px;
    }
  }
  &.tablet {
    margin-left: 20px;
  }
}
.notes-month {
  margin-left: 10px;
  font-size: 1rem;
  color: var(--color-primary);
}
.blank {
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(24 144 255 / 70%);
  height: 10px;
  min-width: 24px;
  height: 24px;
  line-height: 24px;
  opacity: 0.3;
}
</style>
