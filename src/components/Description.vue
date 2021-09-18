// The description section component

<template>
  <div class="description">
    <h2 class="title">Занимайтесь йогой. Улучшайте качество жизни!</h2>
    <card-description
      imgUrl="card-description-1.jpg"
      title="Здоровье"
      :text="healthText" />
    <card-description
      imgUrl="card-description-2.jpg"
      imgPosition="rtl"
      parity="even"
      title="Красота"
      :text="beautyText" />
    <card-description
      imgUrl="card-description-3.jpg"
      title="Спокойствие"
      :text="calmnessText" />
    <h2 class="title">Попробуйте новый формат занятий</h2>
    <div class="vertical-card-description-wrapper">
      <vertical-card-description
        imgUrl="yoga.png"
        title="Йога"
        :text="yogaText" />
      <vertical-card-description
        imgUrl="yoga.jpg"
        title="Мастера"
        :text="teachersText" />
      <vertical-card-description
        imgUrl="technologies.png"
        title="Технологии"
        :text="technologiesText" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import cardDescription from './CardDescription.vue'
import verticalCardDescription from './VerticalCardDescription.vue'
import { Descriptions } from '../assets/static-text'

export default defineComponent({
  name: 'description',
  setup() {
    return {
      healthText: computed(() => Descriptions.HEALTH),
      beautyText: computed(() => Descriptions.BEAUTY),
      calmnessText: computed(() => Descriptions.CALMNESS),
      yogaText: computed(() => Descriptions.YOGA),
      teachersText: computed(() => Descriptions.TEACHERS),
      technologiesText: computed(() => Descriptions.TECHNOLOGIES)
    }
  },
  components: {
    cardDescription,
    verticalCardDescription
  }
})
</script>