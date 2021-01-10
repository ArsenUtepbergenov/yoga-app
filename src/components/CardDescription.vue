// The card description component

<template>
  <div class="card-description">
    <div v-if="isImgLTR" class="card-description-img">
      <img :src="require(`@/assets/${imgUrl}`)" :alt="title" />
    </div>
    <div class="card-description-content">
      <h3 class="card-description-title">{{title}}</h3>
      <p class="card-description-text">
        {{ text }}
      </p>
    </div>
    <div v-if="!isImgLTR" class="card-description-img">
      <img :src="require(`@/assets/${imgUrl}`)" :alt="title" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'card-description',
  props: {
    imgUrl: String,
    title: String,
    text: String,
    imgPosition: {
      type: String,
      default: 'ltr',
      validator: function (value) {
        return ['ltr', 'rtl'].indexOf(value) !== -1
      }
    }
  },
  setup (props) {
    const isImgLTR = computed(() => props.imgPosition === 'ltr')

    return {
      isImgLTR
    }
  }
}
</script>