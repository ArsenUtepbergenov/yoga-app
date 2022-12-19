<template>
  <main>
    <section id="description" class="description">
      <description />
    </section>
    <section id="price" class="price">
      <price />
    </section>
    <section id="teachers" class="teachers">
      <teachers />
    </section>
  </main>
</template>

<script setup lang="ts">
import description from '../Description.vue'
import price from '../Price.vue'
import teachers from '../Teachers.vue'
</script>
