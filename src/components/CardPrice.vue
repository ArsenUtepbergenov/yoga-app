<template>
  <div class="card-price">
    <div class="card-price__title">{{ title }}</div>
    <br />
    <h3>{{ price }}&nbsp;&#8381;</h3>
    <p>за {{ exercises }}&nbsp;{{ endStr }}</p>
    <a-button type="primary" class="btn btn-secondary" @click="toPaymentForm">
      Купить
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'

const temp = ['занятие', 'занятия', 'занятий']

const props = withDefaults(
  defineProps<{
    price: number
    title: string
    exercises: number
  }>(),
  {
    title: '',
    exercises: 0,
    price: 0,
  },
)

function toPaymentForm() {
  console.log(props.price)
}

const endStr = computed(() => {
  switch (props.exercises) {
    case 1:
      return temp[0]
    case 2:
    case 3:
    case 4:
      return temp[1]
    default:
      return temp[2]
  }
})
</script>

<style lang="scss">
.card-price {
  background-color: white;
  color: var(--color-light-grey);
  text-align: center;
  font-size: 1.4rem;
  padding-bottom: 20px;
  border-bottom: 2px solid #e8e8e8;

  &__title {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 12px 0;
    background: var(--color-primary);
  }

  &__text {
    font-size: 1.7rem;
    margin-top: 24px;
  }
}
</style>
