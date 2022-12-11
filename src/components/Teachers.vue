<template>
  <div class="container">
    <h2 class="title">Связаться с мастерами</h2>
    <a-row :gutter="[32, 32]" type="flex" justify="center" wrap>
      <a-col>
        <card-teacher
          imgUrl="natalia.jpg"
          name="Наталья Маркова"
          about="Информация - страшная сила. Страшнее только ее отсутствие"
          :socialMediaLinks="[{ vk: 'https://vk.com/natayoga.markova' }]"
        />
      </a-col>
      <a-col>
        <card-teacher
          imgUrl="sergey.jpg"
          name="Сергей Черников"
          about="«Жизнь – трагедия для того, кто чувствует, и комедия для того, кто мыслит»"
          :socialMediaLinks="[{ vk: 'https://vk.com/bilnt2' }]"
        />
      </a-col>
    </a-row>
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
