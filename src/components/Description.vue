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

<script>
import cardDescription from './CardDescription'
import verticalCardDescription from './VerticalCardDescription'
import { Descriptions } from '../assets/static-text'

export default {
  name: 'description',
  computed: {
    healthText () {
      return Descriptions.HEALTH
    },
    beautyText () {
      return Descriptions.BEAUTY
    },
    calmnessText () {
      return Descriptions.CALMNESS
    },
    yogaText () {
      return Descriptions.YOGA
    },
    teachersText () {
      return Descriptions.TEACHERS
    },
    technologiesText () {
      return Descriptions.TECHNOLOGIES
    }
  },
  components: {
    cardDescription,
    verticalCardDescription
  }
}
</script>