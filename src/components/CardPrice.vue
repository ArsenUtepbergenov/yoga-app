<template>
  <a-card hoverable :title="title" class="price-card">
    <a-row>
      <a-col :span="24" class="price-card-title">
        <a-typography-title :level="2" type="secondary">
          {{ price }}&nbsp;&#8381;
        </a-typography-title>
      </a-col>
      <a-col :span="24">
        <a-button type="primary" block class="btn btn-secondary" @click="toPaymentForm">
          Купить
        </a-button>
      </a-col>
    </a-row>
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
      required: true,
    },
  },
  setup(props) {
    return {
      toPaymentForm: () => console.log(props.price),
    }
  },
})
</script>
