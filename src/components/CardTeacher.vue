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
        :href="getValue(link)"
        target="_blank"
        style="color: #7280d0"
      >
        <i class="fab" :class="`fa-${getKey(link)}`" />
      </a-typography-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card-teacher',
  props: {
    imgUrl: String,
    name: String,
    about: String,
    socialMediaLinks: {
      type: Array<Record<string, string>>,
      default: () => [],
    },
  },
  setup() {
    return {
      getValue: (object: Record<string, string>) => Object.values(object)[0],
      getKey: (object: Record<string, string>) => Object.keys(object)[0],
    }
  },
})
</script>
