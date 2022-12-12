<template>
  <div class="container">
    <h2 class="title">Занимайтесь <strong>Йогой</strong>. Улучшайте качество жизни!</h2>
    <card-description imgUrl="cat.png" title="Здоровье" :text="healthText" />
    <card-description
      imgUrl="boy.png"
      imgPosition="rtl"
      parity="even"
      title="Красота"
      :text="beautyText"
    />
    <card-description imgUrl="girl-relaxing.jpg" title="Спокойствие" :text="calmnessText" />
    <h2 class="title">Попробуйте новый формат занятий!</h2>
    <div class="vertical-card-wrapper">
      <vertical-card imgUrl="yoga.png" title="Йога" :text="yogaText" />
      <vertical-card imgUrl="yoga.jpg" title="Мастера" :text="teachersText" />
      <vertical-card imgUrl="technologies.png" title="Технологии" :text="technologiesText" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import cardDescription from './CardDescription.vue'
import verticalCard from './VerticalCard.vue'
import { Descriptions } from '@/assets/static-text'

export default defineComponent({
  name: 'description',
  setup() {
    return {
      healthText: computed(() => Descriptions.HEALTH),
      beautyText: computed(() => Descriptions.BEAUTY),
      calmnessText: computed(() => Descriptions.CALMNESS),
      yogaText: computed(() => Descriptions.YOGA),
      teachersText: computed(() => Descriptions.TEACHERS),
      technologiesText: computed(() => Descriptions.TECHNOLOGIES),
    }
  },
  components: {
    cardDescription,
    verticalCard,
  },
})
</script>
