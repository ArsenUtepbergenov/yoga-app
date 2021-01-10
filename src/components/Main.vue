// The main content component

<template>
  <main>
    <section class="container">
      <description />
    </section>
    <timetable />
    <price />
    <teachers />
  </main>
</template>

<script>
import description from './Description'
import timetable from './Timetable'
import price from './Price'
import teachers from './Teachers'

export default {
  name: 'app-main',
  components: {
    description,
    timetable,
    teachers,
    price
  }
}
</script>
