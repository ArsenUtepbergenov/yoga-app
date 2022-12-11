<template>
  <a-card
    :title="title"
    :headStyle="{ fontSize: '1.2rem', fontWeight: 'bold', color: '#937298', textAlign: 'center' }"
  >
    <a-card-grid style="width: 100%; text-align: center" :hoverable="false">
      <a-typography-title :level="3" type="secondary">
        {{ price }}&nbsp;&#8381;
      </a-typography-title>
      <a-typography-text type="secondary">{{ exercises }}&nbsp;</a-typography-text>
      <a-typography-text type="secondary">занятий</a-typography-text>
    </a-card-grid>
    <template #actions>
      <a-button type="primary" class="btn btn-secondary" @click="toPaymentForm"> Купить </a-button>
    </template>
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
    exercises: {
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
