// The card price component

<template>
  <a-card hoverable :title="title">
    <p>{{price}}&nbsp;</p>
    <a-button
      type="primary"
      class="btn btn-primary"
    >
      Купить
    </a-button>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card-price',
  props: {
    title: String,
    price: {
      type: Number,
      required: true
    }
  }
})
</script>