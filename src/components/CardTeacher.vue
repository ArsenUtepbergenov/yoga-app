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

<style lang="scss">
.card-teacher {
  width: 560px;
  height: 270px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 50px;
  box-shadow: 2px 2px 6px 1px #f4f4f4;

  &-social-links {
    justify-self: end;
    font-size: 2rem;
    margin-right: 10px;
  }

  &-name {
    color: var(--color-light-blue);
    border-bottom: 6px solid var(--color-light-blue);
  }

  &-info {
    color: var(--color-light-grey);
    grid-column: 2/3;
    grid-row: 1/3;
    margin-top: 10px;
    font-size: 1rem;
  }

  &-image {
    width: 270px;
    height: inherit;
    grid-row: 1/4;
  }
}
</style>
