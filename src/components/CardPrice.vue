// The card price component

<template>
  <div class="card-price">
    <div class="card-price-title-wrapper">
      <h6 class="card-price-title">{{title}}</h6>
    </div>
    <div class="card-price-value">{{price}}&nbsp;<i class="fas fa-ruble-sign fa-xs"></i></div>
    <button class="card-price-button">Купить</button>
  </div>
</template>

<script>
export default {
  name: 'card-price',
  props: {
    title: String,
    price: {
      type: Number,
      required: true
    }
  }
}
</script>