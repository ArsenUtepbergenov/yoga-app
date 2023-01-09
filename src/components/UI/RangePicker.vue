<template>
  <a-config-provider :locale="locale">
    <a-range-picker
      size="large"
      :value="value"
      :disabled-date="disabledDate"
      :disabled-time="disabledRangeTime"
      :show-time="{
        hideDisabledOptions: true,
        defaultValue: [dayjs('09:00', 'HH:mm'), dayjs('10:00', 'HH:mm')],
      }"
      :locale="locale"
      format="DD-MM-YYYY HH:mm"
      @change="handleChange"
    />
  </a-config-provider>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useStore } from '@/store'
import { range } from '@/utils/time'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'
import { NewExerciseEvent } from '@/models'
dayjs.locale('ru')

const props = defineProps<{ id: number }>()
const value = ref<[Dayjs, Dayjs]>()
const store = useStore()

watch(
  () => store.getters['events/newList'],
  list => {
    if (list) {
      const item = list.find((i: NewExerciseEvent) => i.id === props.id)

      if (item) value.value = [item.fromValue, item.toValue]
    }
  },
  { deep: true, immediate: true },
)

function handleChange([from, to]: [Dayjs, Dayjs]) {
  store.commit('events/setNewListItem', {
    id: props.id,
    from: from.format() || '',
    to: to.format() || '',
    fromValue: from,
    toValue: to,
  })
}

function disabledDate(current: Dayjs) {
  return current && current < dayjs().endOf('day')
}

function disabledRangeTime(_: Dayjs, type: 'start' | 'end') {
  if (type === 'start') {
    return {
      disabledHours: () => [...range(0, 9), ...range(22, 24)],
    }
  }
  return {
    disabledHours: () => [...range(0, 9), ...range(23, 24)],
  }
}
</script>
