<template>
  <a-form
    ref="formRef"
    layout="vertical"
    :model="formState"
    :rules="rules"
    @finish="handleFinish"
  >
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
    <a-form-item>
      <a-button type="link" class="forgot-password-link" @click="toForgotPassword">
        <strong>Забыли пароль?</strong>
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, UnwrapRef, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { FirebaseUser } from '@/models'
import { RuleObject } from 'ant-design-vue/lib/form/interface'
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue'
import { Pages } from '@/enums'
import { useRouter } from 'vue-router'
import { setAuthModal } from '@/store/modal'

const router = useRouter()
const formRef = ref()
const store = useStore()
const formState: UnwrapRef<FirebaseUser> = reactive({
  email: '',
  password: '',
})

watch(
  () => store.getters['modal/isAuthVisible'],
  value => {
    if (!value) resetForm()
  },
)

function toForgotPassword() {
  setAuthModal(false)
  router.push({ name: Pages.FORGOT_PASSWORD })
}

async function validatePassword(rule: RuleObject, value: string) {
  try {
    if (value === '') {
      throw new Error('Минимальная длина 6 символов.')
    } else {
      return Promise.resolve()
    }
  } catch (error) {
    return Promise.reject(error.message)
  }
}

async function handleFinish(values: FirebaseUser) {
  await store.dispatch('auth/login', {
    email: values.email,
    password: values.password,
  })
  if (router.currentRoute.value.name !== Pages.HOME) router.push({ name: Pages.HOME })
}

function resetForm() {
  formRef.value.resetFields()
}

const rules = {
  email: [
    { required: true, message: 'Пожалуйста, введите свою почту.', trigger: 'blur' },
  ],
  password: [{ required: true, validator: validatePassword, trigger: 'change' }],
}

const disabled = computed(() => formState.email === '' || formState.password === '')
</script>

<style lang="scss" scoped>
.forgot-password-link {
  &:hover {
    color: var(--color-primary);
  }
}
</style>
