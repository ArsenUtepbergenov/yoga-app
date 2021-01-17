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

<script>
import { computed } from 'vue'
import cardDescription from './CardDescription'
import verticalCardDescription from './VerticalCardDescription'
import { Descriptions } from '../assets/static-text'

export default {
  name: 'description',
  setup () {
    const healthText = computed(() => Descriptions.HEALTH)
    const beautyText = computed(() => Descriptions.BEAUTY)
    const calmnessText = computed(() => Descriptions.CALMNESS)
    const yogaText = computed(() => Descriptions.YOGA)
    const teachersText = computed(() => Descriptions.TEACHERS)
    const technologiesText = computed(() => Descriptions.TECHNOLOGIES)

    return {
      healthText,
      beautyText,
      calmnessText,
      yogaText,
      teachersText,
      technologiesText
    }
  },
  components: {
    cardDescription,
    verticalCardDescription
  }
}
</script>