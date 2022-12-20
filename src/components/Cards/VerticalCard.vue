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

<style lang="scss">
.vertical-card {
  width: 280px;
  text-align: center;
  margin: 10px;
  font-size: 1rem;
  color: var(--color-light-grey);

  img {
    height: 260px;
    border-radius: 100%;
  }
}
</style>
