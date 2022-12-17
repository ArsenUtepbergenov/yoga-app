<template>
  <a-card class="vertical-card" :bordered="false">
    <template #cover>
      <img :src="`/src/assets/${imgUrl}`" :alt="title" class="vertical-card-image" />
    </template>
    <h2>{{ title }}</h2>
    {{ text }}
  </a-card>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    imgUrl: string
    title: string
    text: string
  }>(),
  {
    imgUrl: '',
    title: '',
    text: '',
  },
)
</script>
