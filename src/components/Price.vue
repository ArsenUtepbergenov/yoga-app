<template>
  <div class="container">
    <h2 class="title">Онлайн-занятия</h2>
    <a-row :gutter="[24, 24]" type="flex" justify="space-around">
      <a-col :xs="{ span: 20 }" :sm="{ span: 10 }" :lg="{ span: 6 }">
        <card-price title="Разовое" :price="500" :exercises="1" />
      </a-col>
      <a-col :xs="{ span: 20 }" :sm="{ span: 10 }" :lg="{ span: 6 }">
        <card-price title="Пробный" :price="2000" :exercises="4" />
      </a-col>
      <a-col :xs="{ span: 20 }" :sm="{ span: 10 }" :lg="{ span: 6 }">
        <card-price title="Стандартный" :price="3200" :exercises="8" />
      </a-col>
      <a-col :xs="{ span: 20 }" :sm="{ span: 10 }" :lg="{ span: 6 }">
        <card-price title="Интенсив" :price="7400" :exercises="16" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import cardPrice from './Cards/CardPrice.vue'
</script>

<style lang="scss">
.price {
  background: #ececee;
  padding: 1rem 30px 60px 30px;
}
</style>
