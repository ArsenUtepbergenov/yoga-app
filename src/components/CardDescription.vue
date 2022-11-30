<template>
  <div :style="[oddStyles, parity === 'even' && evenStyles]">
    <div v-if="isImgLTR" class="card-description-img">
      <img :src="`/src/assets/${imgUrl}`" :alt="title" />
    </div>
    <div class="card-description-content">
      <h3 class="card-description-title">{{ title }}</h3>
      <p class="card-description-text">
        {{ text }}
      </p>
    </div>
    <div v-if="!isImgLTR" class="card-description-img">
      <img :src="`/src/assets/${imgUrl}`" :alt="title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'card-description',
  props: {
    imgUrl: String,
    title: String,
    text: String,
    parity: {
      type: String,
      default: 'odd',
      validator: (value: string) => ['odd', 'even'].indexOf(value) !== -1,
    },
    imgPosition: {
      type: String,
      default: 'ltr',
      validator: (value: string) => ['ltr', 'rtl'].indexOf(value) !== -1,
    },
  },
  setup(props) {
    const oddStyles = ref({ display: 'flex', padding: '20px' })
    const evenStyles = ref({ background: '#ECECEC' })

    return {
      evenStyles,
      oddStyles,
      isImgLTR: computed(() => props.imgPosition === 'ltr'),
    }
  },
})
</script>
