<template>
  <a-form
    ref="formRef"
    layout="vertical"
    :model="formState"
    :rules="rules"
    @finish="emit('pay')"
  >
    <a-form-item class="form-field" has-feedback name="name">
      <a-input
        v-model:value="formState.name"
        type="name"
        size="large"
        placeholder="Имя..."
      >
        <template #addonBefore><ContactsOutlined /></template>
      </a-input>
    </a-form-item>
    <a-form-item class="form-field" has-feedback name="email">
      <a-input
        v-model:value="formState.email"
        type="email"
        size="large"
        placeholder="Почта..."
      >
        <template #addonBefore><MailOutlined /></template>
      </a-input>
    </a-form-item>
    <a-form-item class="form-field" has-feedback name="phone">
      <a-input
        v-model:value="formState.phone"
        type="phone"
        size="large"
        autocomplete="off"
        placeholder="Телефон..."
      >
        <template #addonBefore><PhoneOutlined /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-typography-text mark>Сумма: {{ currentPrice }} &#8381;</a-typography-text>
    </a-form-item>
    <a-form-item>
      <a-button
        block
        size="large"
        type="primary"
        html-type="submit"
        class="btn btn-primary"
        :disabled="disabled"
      >
        Подтвердить
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { ContactsOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons-vue'
import { useStore } from '@/store'

const formRef = ref()
const formState = reactive({
  name: '',
  email: '',
  phone: '',
})

const emit = defineEmits(['pay'])

const store = useStore()

const rules = {
  name: [{ required: true, message: 'Пожалуйста, введите своё имя', trigger: 'blur' }],
  email: [
    { required: true, message: 'Пожалуйста, введите свою почту', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'Пожалуйста, введите свой телефон', trigger: 'blur' },
  ],
}

const currentPrice = computed(() => store.getters['tariffPrice'])

const disabled = computed(
  () => formState.email === '' || formState.phone === '' || formState.name === '',
)
</script>
