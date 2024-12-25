<template>
  <div class="container">
    <h2 class="title">Выберите удобный тариф</h2>
    <a-row :gutter="[40, 40]" justify="center">
      <a-col>
        <card-price
          title="Пробное занятие"
          :price="300"
          :exercises="1"
          @pay="openPaymentModal"
        />
      </a-col>
      <a-col>
        <card-price
          title="Разовое занятие"
          :price="500"
          :exercises="4"
          @pay="openPaymentModal"
        />
      </a-col>
      <a-col>
        <card-price
          title="4 занятия"
          :price="1800"
          :exercises="8"
          @pay="openPaymentModal"
        />
      </a-col>
      <a-col>
        <card-price
          title="8 занятий"
          :price="3100"
          :exercises="16"
          @pay="openPaymentModal"
        />
      </a-col>
      <a-col>
        <card-price
          title="12 занятий"
          :price="4000"
          :exercises="16"
          @pay="openPaymentModal"
        />
      </a-col>
      <a-col>
        <card-price
          title="Безлимитный"
          :price="5000"
          :exercises="16"
          @pay="openPaymentModal"
        />
      </a-col>
    </a-row>
    <a-modal
      :visible="isPaymentModalVisible"
      width="360px"
      :footer="null"
      title="Ваш заказ"
      @cancel="closePaymentModal"
    >
      <payment-form @pay="handlePay" />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import cardPrice from './Cards/CardPrice.vue'
import PaymentForm from './PaymentForm.vue'
import { useStore } from '@/store'

const store = useStore()

const isPaymentModalVisible = ref<boolean>(false)

function openPaymentModal(price: number): void {
  store.commit('setTariffPrice', price)
  isPaymentModalVisible.value = true
}

function closePaymentModal(): void {
  store.commit('setTariffPrice', 0)
  isPaymentModalVisible.value = false
}

function handlePay(): void {
  console.log('handlePay')
}
</script>

<style lang="scss">
.price {
  background: #ececee;
  padding: 1rem 30px 60px 30px;
}
</style>
