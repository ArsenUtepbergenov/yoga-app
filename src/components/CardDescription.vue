<template>
  <div class="card-description">
    <div v-if="isImgLTR" class="card-description-img">
      <img :src="`/src/assets/${imgUrl}`" :alt="title" />
    </div>
    <div class="card-description-content">
      <h3 class="card-description-title">{{ title }}</h3>
      <p class="card-description-text cutoff-text">
        {{ text }}
      </p>
      <input type="checkbox" class="expand-btn" />
    </div>
    <div v-if="!isImgLTR" class="card-description-img">
      <img :src="`/src/assets/${imgUrl}`" :alt="title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  imgUrl: String,
  title: String,
  text: String,
  imgPosition: {
    type: String,
    default: 'ltr',
    validator: (value: string) => ['ltr', 'rtl'].indexOf(value) !== -1,
  },
})

const isImgLTR = computed(() => props.imgPosition === 'ltr')
</script>
