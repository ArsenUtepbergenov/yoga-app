// The price section component

<template>
  <div id="price" class="price container">
    <h2 class="title">Стоимость онлайн-занятий</h2>
    <div class="price-cards">
      <card-price title="Разовое занятие" :price="750" />
      <card-price title="Абонемент на 4 занятия" :price="2860" />
      <card-price title="Абонемент на 8 занятия" :price="4920" />
      <card-price title="Абонемент на 16 занятия" :price="8240" />
    </div>
  </div>
</template>

<script>
import cardPrice from './CardPrice'

export default {
  name: 'price',
  components: {
    cardPrice
  }
}
</script>