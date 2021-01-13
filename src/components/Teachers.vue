// The teachers section component

<template>
  <div class="teachers container">
    <div class="teachers-cards">
      <card-teacher
        imgUrl="natalia.jpg"
        name="Наталья Маркова"
        about="Информация - страшная сила. Страшнее только ее отсутствие"
        :socialMediaLinks="[{ vk: 'https://vk.com/natayoga.markova' }]" />
    </div>
  </div>
</template>

<script>
import cardTeacher from './CardTeacher'

export default {
  name: 'teachers',
  components: {
    cardTeacher
  }
}
</script>