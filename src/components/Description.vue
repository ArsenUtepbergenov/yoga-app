<template>
  <div class="container">
    <h2 class="title">Занимайтесь <strong>Йогой</strong>. Улучшайте качество жизни!</h2>
    <card-description v-once imgUrl="cat.png" title="Здоровье" :text="healthText" />
    <card-description
      v-once
      imgUrl="boy.png"
      imgPosition="rtl"
      title="Красота"
      :text="beautyText"
    />
    <card-description
      v-once
      imgUrl="girl-relaxing.jpg"
      title="Спокойствие"
      :text="calmnessText"
    />
    <h2 class="title">Попробуйте новый формат занятий!</h2>
    <a-row type="flex" justify="space-around">
      <vertical-card v-once imgUrl="yoga.png" title="Йога" :text="yogaText" />
      <vertical-card v-once imgUrl="yoga.jpg" title="Мастера" :text="teachersText" />
      <vertical-card
        v-once
        imgUrl="technologies.png"
        title="Технологии"
        :text="technologiesText"
      />
    </a-row>
  </div>
</template>

<script setup lang="ts">
import cardDescription from './CardDescription.vue'
import verticalCard from './VerticalCard.vue'
import Descriptions from '@/assets/static-text'

const { HEALTH, BEAUTY, CALMNESS, YOGA, TEACHERS, TECHNOLOGIES } = Descriptions

const healthText = HEALTH
const beautyText = BEAUTY
const calmnessText = CALMNESS
const yogaText = YOGA
const teachersText = TEACHERS
const technologiesText = TECHNOLOGIES
</script>
