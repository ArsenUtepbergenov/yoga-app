// The price section component

<template>
  <section id="price" class="price">
    <h2 class="title">Стоимость онлайн-занятий</h2>
    <a-row  :gutter="[0, 24]" type="flex" justify="space-around">
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Разовое занятие" :price="500" />
      </a-col>
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Абонемент на 4 занятия" :price="1600" />
      </a-col>
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Абонемент на 8 занятия" :price="3200" />
      </a-col>
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Абонемент на 16 занятия" :price="7400" />
      </a-col>
    </a-row>
  </section>
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