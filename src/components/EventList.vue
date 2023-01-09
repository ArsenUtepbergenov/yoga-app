<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a-button type="danger" @click="() => handleDelete(item._id)"
            >Удалить</a-button
          >
        </template>
        {{ item.value }}, с {{ item.from }} - до {{ item.to }}
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { deleteEvent } from '@/services/events-service'

const store = useStore()

const data = computed(() => store.getters['events/dates'])

async function handleDelete(id: string) {
  await deleteEvent(id)
  store.commit('events/removeFromDates', id)
}
</script>
