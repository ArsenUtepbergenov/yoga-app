<template>
  <div class="container">
    <h2 class="title">Связаться с мастерами</h2>
    <a-row :gutter="[24, 24]" type="flex" justify="center">
      <card-teacher
        imgUrl="sergey.jpg"
        name="Сергей Черников"
        about="«Жизнь – трагедия для того, кто чувствует, и комедия для того, кто мыслит»"
        :socialMediaLinks="[{ vk: 'https://vk.com/bilnt2' }]"
      />
    </a-row>
  </div>
</template>

<script setup lang="ts">
import cardTeacher from './Cards/CardTeacher.vue'
</script>
