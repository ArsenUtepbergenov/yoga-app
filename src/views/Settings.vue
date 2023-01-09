<template>
  <section class="container">
    <div class="settings">
      <a-tabs v-model:activeKey="activeKey" tab-position="left">
        <a-tab-pane key="1">
          <template #tab>
            <plus-outlined />
            Создать
          </template>
          <a-space direction="vertical" align="center" :size="16">
            <a-space v-for="row in newList" :key="row.id">
              <range-picker :id="row.id" />
              <a-button @click="() => handleRemoveRow(row.id)" type="text">
                <minus-outlined />
              </a-button>
            </a-space>
            <a-button @click="handleAddRow" type="dashed">
              <plus-outlined />
            </a-button>
            <a-button
              @click="handleCreateEvents"
              type="primary"
              class="btn btn-primary"
              :disabled="isAddDisabled"
            >
              Добавить занятия
            </a-button>
          </a-space>
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab>
            <edit-outlined />
            Редактировать
          </template>
          <event-list />
        </a-tab-pane>
      </a-tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { _id } from '@/utils/id'
import { useStore } from '@/store'
import RangePicker from '@/components/UI/RangePicker.vue'
import EventList from '@/components/EventList.vue'
import { PlusOutlined, MinusOutlined, EditOutlined } from '@ant-design/icons-vue'

const store = useStore()
const activeKey = ref('1')

watch(
  () => activeKey.value,
  key => {
    if (key === '2') fetchDates()
  },
)

const newList = computed(() => store.getters['events/newList'])
const isAddDisabled = computed(() => !newList.value.length)

function handleCreateEvents() {
  store.dispatch('events/create')
}

function handleRemoveRow(id: number) {
  store.commit('events/removeFromNewList', id)
}

function handleAddRow() {
  store.commit('events/addNewListItem', { id: _id() })
}

async function fetchDates() {
  await store.dispatch('events/fetchDates')
}
</script>

<style>
.settings {
  margin: 40px 60px 0 60px;
}
</style>
