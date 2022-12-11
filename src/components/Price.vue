<template>
  <div class="container">
    <h2 class="title">Стоимость онлайн-занятий</h2>
    <a-row :gutter="[0, 24]" type="flex" justify="space-around">
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Разовое занятие" :price="500" :exercises="1" />
      </a-col>
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Пробный" :price="1600" :exercises="4" />
      </a-col>
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Стандартный" :price="3200" :exercises="8" />
      </a-col>
      <a-col :xs="{ span: 11 }" :md="{ span: 7 }" :lg="{ span: 5 }">
        <card-price title="Интенсив" :price="7400" :exercises="16" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import cardPrice from './CardPrice'

export default {
  name: 'price',
  components: {
    cardPrice,
  },
}
</script>
