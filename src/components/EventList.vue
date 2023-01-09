<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a-button type="danger">Удалить</a-button>
        </template>
        {{ item.value }}, с {{ item.from }} - до {{ item.to }}
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const data = computed(() => store.getters['events/dates'])
</script>
