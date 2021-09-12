// The price section component

<template>
  <div id="price" class="price container">
    <h2 class="title">Стоимость онлайн-занятий</h2>
    <a-row :gutter="[16, 16]" type="flex" justify="center">
      <a-col :xs="{ span: 11 }" :lg="{ span: 5 }">
        <card-price title="Разовое занятие" :price="750" />
      </a-col>
      <a-col :xs="{ span: 11 }" :lg="{ span: 5 }">
        <card-price title="Абонемент на 4 занятия" :price="2860" />
      </a-col>
      <a-col :xs="{ span: 11 }" :lg="{ span: 5 }">
        <card-price title="Абонемент на 8 занятия" :price="4920" />
      </a-col>
      <a-col :xs="{ span: 11 }" :lg="{ span: 5 }">
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