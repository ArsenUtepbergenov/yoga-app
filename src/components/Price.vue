// The price section component

<template>
  <div id="price" class="container price">
    <h2 class="title">Стоимость онлайн-занятий</h2>
    <a-row  :gutter="[0, 24]" type="flex" justify="space-around">
      <a-col :xs="{ span: 10 }" :lg="{ span: 4 }">
        <card-price title="Разовое занятие" :price="750" />
      </a-col>
      <a-col :xs="{ span: 10 }" :lg="{ span: 4 }">
        <card-price title="Абонемент на 4 занятия" :price="2860" />
      </a-col>
      <a-col :xs="{ span: 10 }" :lg="{ span: 4 }">
        <card-price title="Абонемент на 8 занятия" :price="4920" />
      </a-col>
      <a-col :xs="{ span: 10 }" :lg="{ span: 4 }">
        <card-price title="Абонемент на 16 занятия" :price="8240" />
      </a-col>
    </a-row>
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