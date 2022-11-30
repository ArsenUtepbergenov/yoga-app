<template>
  <a-card class="vertical-card-description" :bordered="false">
    <template #cover>
      <img :src="`/src/assets/${imgUrl}`" :alt="title" class="vertical-card-description-image" />
    </template>
    <a-card-meta :title="title" />
    {{ text }}
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vertical-card-description',
  props: {
    imgUrl: String,
    title: String,
    text: String,
  },
})
</script>
