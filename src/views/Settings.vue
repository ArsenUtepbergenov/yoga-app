<template>
  <section class="container">
    <div class="settings">
      <a-space direction="vertical" align="center" :size="16">
        <a-space v-for="(row, index) in rows" :key="row.id">
          <range-picker :index="index" />
          <a-button @click="() => handleRemoveRow(row.id)" type="text">
            <minus-outlined />
          </a-button>
        </a-space>
        <a-button @click="handleAddRow" type="text">
          <plus-outlined />
        </a-button>
        <a-button @click="handleAddEvents">Добавить занятия</a-button>
      </a-space>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { _id } from '@/utils/id'
import RangePicker from '@/components/UI/RangePicker.vue'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue'

let rows = ref([
  {
    id: _id(),
  },
])

function handleAddEvents() {}

function handleRemoveRow(id: number) {
  rows.value = rows.value.filter(row => row.id !== id)
}

function handleAddRow() {
  rows.value.push({
    id: _id(),
  })
}
</script>

<style>
.settings {
  margin: 40px 60px 0 60px;
}
</style>
