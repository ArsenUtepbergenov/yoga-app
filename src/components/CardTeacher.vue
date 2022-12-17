<template>
  <div class="card-teacher">
    <img class="card-teacher-image" :src="`/src/assets/${imgUrl}`" :alt="name" />
    <div class="card-teacher-info">
      <h3 class="card-teacher-name">{{ name }}</h3>
      <p>{{ about }}</p>
    </div>
    <div class="card-teacher-social-links">
      <a-typography-link
        v-for="(link, index) in socialMediaLinks"
        :key="index"
        :href="getValue(index)"
        target="_blank"
        style="color: #7280d0"
      >
        <i class="fab" :class="`fa-${getKey(index)}`" />
      </a-typography-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'

const props = withDefaults(
  defineProps<{
    imgUrl: string
    name: string
    about: string
    socialMediaLinks: Record<string, string>[]
  }>(),
  {
    imgUrl: '',
    name: '',
    about: '',
    socialMediaLinks: () => [],
  },
)

const linkNames: string[] = []
const linkValues: string[] = []

onBeforeMount(() => {
  const links = props.socialMediaLinks

  for (const link of links) {
    for (const value in link) {
      linkNames.push(value)
      linkValues.push(link[value])
    }
  }
})

function getValue(index: number) {
  return linkValues[index]
}

function getKey(index: number) {
  return linkNames[index]
}
</script>
