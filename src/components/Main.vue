<template>
  <main class="container">
    <description />
    <price />
    <teachers />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import description from './Description.vue'
import price from './Price.vue'
import teachers from './Teachers.vue'

export default defineComponent({
  name: 'app-main',
  components: {
    description,
    teachers,
    price,
  },
})
</script>
