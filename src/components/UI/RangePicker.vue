<template>
  <a-config-provider :locale="locale">
    <a-range-picker
      size="large"
      :disabled-date="disabledDate"
      :disabled-time="disabledRangeTime"
      :show-time="{
        hideDisabledOptions: true,
        defaultValue: [dayjs('08:00', 'HH:mm'), dayjs('09:00', 'HH:mm')],
      }"
      :locale="locale"
      format="DD-MM-YYYY HH:mm"
      @change="handleChange"
    />
  </a-config-provider>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { range } from '@/utils/time'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'
dayjs.locale('ru')

const store = useStore()

function handleChange(value: [Dayjs, Dayjs]) {
  store.commit('events/setNewList', [
    {
      from: value[0]?.format() || '',
      to: value[1]?.format() || '',
      type: 'success',
      content: '',
    },
  ])
}

function disabledDate(current: Dayjs) {
  return current && current < dayjs().endOf('day')
}

function disabledRangeTime(_: Dayjs, type: 'start' | 'end') {
  if (type === 'start') {
    return {
      disabledHours: () => [...range(0, 8), ...range(22, 24)],
    }
  }
  return {
    disabledHours: () => [...range(0, 8), ...range(23, 24)],
  }
}
</script>
