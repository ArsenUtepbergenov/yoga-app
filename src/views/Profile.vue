<template>
  <section class="containe">
    <a-card>
      <template class="ant-card-actions" #actions> social links </template>
      <a-card-meta title="User name" description="">
        <template #avatar>
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </template>
      </a-card-meta>
      <p>Почта: {{ email }}</p>
    </a-card>
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'profile',
  setup() {
    const store = useStore()

    return {
      email: computed(() => store.getters['auth/user']?.email),
    }
  },
})
</script>
