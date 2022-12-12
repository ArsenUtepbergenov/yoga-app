<template>
  <div class="container">
    <h2 class="title">Связаться с мастерами</h2>
    <div class="flex wrap">
      <card-teacher
        imgUrl="sergey.jpg"
        name="Сергей Черников"
        about="«Жизнь – трагедия для того, кто чувствует, и комедия для того, кто мыслит»"
        :socialMediaLinks="[{ vk: 'https://vk.com/bilnt2' }]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cardTeacher from './CardTeacher.vue'

export default defineComponent({
  name: 'teachers',
  components: {
    cardTeacher,
  },
})
</script>
