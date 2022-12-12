<template>
  <a-card class="vertical-card" :bordered="false">
    <template #cover>
      <img :src="`/src/assets/${imgUrl}`" :alt="title" class="vertical-card-image" />
    </template>
    <h2>{{ title }}</h2>
    {{ text }}
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vertical-card',
  props: {
    imgUrl: String,
    title: String,
    text: String,
  },
})
</script>
