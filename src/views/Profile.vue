<template>
  <section class="containe">
    <a-card>
      <template class="ant-card-actions" #actions> social links </template>
      <a-card-meta title="User name" description="">
        <template #avatar>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </template>
      </a-card-meta>
      <p>Почта: {{ email }}</p>
    </a-card>
  </section>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const email = computed(() => store.getters['auth/user']?.email)
</script>
