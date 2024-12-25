<template>
  <div class="card-price">
    <div class="card-price__title">{{ title }}</div>
    <br />
    <div class="card-price__content">
      <h2>{{ price }}&nbsp;&#8381;</h2>
      <small>Срок действия - месяц с первого посещения</small>
      <br />
      <a-button type="primary" class="btn btn-secondary" @click="pay">
        Купить
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

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

const emit = defineEmits(['pay'])

function pay() {
  emit('pay', props.price)
}
</script>

<style lang="scss">
.card-price {
  background-color: white;
  color: var(--color-light-grey);
  text-align: center;
  width: 240px;
  height: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 6px 1px #dfdfdf;

  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 16px 20px 16px;
    flex-grow: 1;
  }

  &__title {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 12px 0;
    background: linear-gradient(330deg, #4d9e6e, #7280d0);
  }
}
</style>
