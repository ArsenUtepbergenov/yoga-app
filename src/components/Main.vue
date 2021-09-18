// The main content component

<template>
  <main>
    <section class="container">
      <description />
    </section>
    <section class="container">
      <price />
    </section>
    <section class="container">
      <timetable />
    </section>
    <section class="container">
      <teachers />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import description from './Description.vue'
import timetable from './Timetable.vue'
import price from './Price.vue'
import teachers from './Teachers.vue'

export default defineComponent({
  name: 'app-main',
  components: {
    description,
    timetable,
    teachers,
    price
  }
})
</script>
