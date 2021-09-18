// The teachers section component

<template>
  <div id="teachers" class="teachers">
    <h2 class="title">Связаться с мастерами</h2>
    <div class="teachers-cards">
      <card-teacher
        imgUrl="natalia.jpg"
        name="Наталья Маркова"
        about="Информация - страшная сила. Страшнее только ее отсутствие"
        :socialMediaLinks="[{ vk: 'https://vk.com/natayoga.markova' }]" />
      <card-teacher
        imgUrl="sergey.jpg"
        name="Сергей Черников"
        about="«Жизнь – трагедия для того, кто чувствует, и комедия для того, кто мыслит»"
        :socialMediaLinks="[{ vk: 'https://vk.com/bilnt2' }]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cardTeacher from './CardTeacher.vue'

export default defineComponent({
  name: 'teachers',
  components: {
    cardTeacher
  }
})
</script>