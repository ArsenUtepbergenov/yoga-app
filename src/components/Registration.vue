<template>
  <a-form
    ref="formRef"
    layout="vertical"
    :model="formState"
    :rules="rules"
    @finish="handleFinish"
  >
    <a-form-item class="form-field" has-feedback name="name">
      <a-input v-model:value="formState.name" size="large" placeholder="Имя...">
        <template #addonBefore><UserOutlined /></template>
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
    <a-form-item class="form-field" has-feedback name="password">
      <a-input
        v-model:value="formState.password"
        type="password"
        size="large"
        autocomplete="off"
        placeholder="Пароль..."
      >
        <template #addonBefore><LockOutlined /></template>
      </a-input>
    </a-form-item>
    <a-form-item class="form-field" has-feedback name="repeatedPassword">
      <a-input
        v-model:value="formState.repeatedPassword"
        type="password"
        size="large"
        autocomplete="off"
        placeholder="Повторите пароль..."
      >
        <template #addonBefore><LockOutlined /></template>
      </a-input>
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
        Создать
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { UserWithRepeatedPassword } from '@/models'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue'
import { RuleObject } from 'ant-design-vue/es/form/interface'
import { reactive, UnwrapRef, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { Pages } from '@/enums'

const router = useRouter()
const formRef = ref()
const store = useStore()
const formState: UnwrapRef<UserWithRepeatedPassword> = reactive({
  name: '',
  email: '',
  password: '',
  repeatedPassword: '',
})

watch(
  () => store.getters['modal/isAuthVisible'],
  value => {
    if (!value) resetForm()
  },
)

async function validatePassword(rule: RuleObject, value: string) {
  try {
    if (value === '') {
      throw new Error('Пожалуйста, введите пароль')
    } else {
      if (formState.repeatedPassword !== '') {
        formRef.value.validateFields('repeatedPassword')
      }
      return Promise.resolve()
    }
  } catch (error) {
    return Promise.reject(error.message)
  }
}

async function validatePassword2(rule: RuleObject, value: string) {
  try {
    if (value === '') {
      throw new Error('Пожалуйста, введите пароль ещё раз!')
    } else if (value !== formState.password) {
      throw new Error('Пароли не совпадают!')
    }
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error.message)
  }
}

async function handleFinish(values: UserWithRepeatedPassword) {
  if (!isPasswordError.value) {
    const { name, email, password } = values
    await store.dispatch('auth/registration', { name, email, password })
  }

  if (router.currentRoute.value.name !== Pages.HOME) router.push({ name: Pages.HOME })
}

const rules = {
  name: [
    { required: true, message: 'Пожалуйста, введите своё имя', trigger: 'blur' },
    {
      min: 3,
      max: 20,
      message: 'Длина имени должна иметь от 3 до 20 символов',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, validator: validatePassword, trigger: 'change' }],
  repeatedPassword: [{ validator: validatePassword2, trigger: 'change' }],
}

function resetForm() {
  formRef.value.resetFields()
}

const isPasswordError = computed(
  () => formState.password !== formState.repeatedPassword,
)

const disabled = computed(
  () => formState.name === '' || formState.email === '' || isPasswordError.value,
)
</script>
