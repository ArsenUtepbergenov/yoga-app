<template>
  <main>
    <section class="description">
      <description />
    </section>
    <section ref="timetableRef" class="timetable">
      <timetable />
    </section>
    <section ref="priceRef" class="price">
      <price />
    </section>
    <section ref="teachersRef" class="teachers">
      <teachers />
    </section>
    <section ref="contactRef" class="contact">
      <contact />
    </section>
  </main>
</template>

<script setup lang="ts">
import description from '../Description.vue'
import price from '../Price.vue'
import teachers from '../Teachers.vue'
import timetable from '../Timetable.vue'
import contact from '../Contact.vue'
import { useStore } from '@/store'
import { onMounted, ref } from 'vue'

const store = useStore()
const priceRef = ref<HTMLElement>()
const teachersRef = ref<HTMLElement>()
const timetableRef = ref<HTMLElement>()
const contactRef = ref<HTMLElement>()

onMounted(() => {
  store.commit('setSections', [
    {
      key: 'timetable',
      element: timetableRef.value,
    },
    {
      key: 'price',
      element: priceRef.value,
    },
    {
      key: 'teachers',
      element: teachersRef.value,
    },
    {
      key: 'contact',
      element: contactRef.value,
    },
  ])
})
</script>
