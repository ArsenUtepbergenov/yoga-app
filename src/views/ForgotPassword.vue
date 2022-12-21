<template>
  <section ref="forgotPasswordRef">
    <a-form
      ref="formForgotPasswordRef"
      :model="formState"
      :rules="rules"
      style="width: 300px; margin: 40px auto"
      @finish="handleFinish"
    >
      <a-form-item class="form-field" has-feedback name="resetEmail">
        <a-input
          v-model:value="formState.resetEmail"
          type="email"
          size="large"
          placeholder="Почта..."
        >
          <template #addonBefore><MailOutlined /></template>
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
          Сбросить
        </a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<script setup lang="ts">
import useScroll from '@/hooks/useScroll'
import store from '@/store'
import { MailOutlined } from '@ant-design/icons-vue'
import { onMounted, ref, UnwrapRef, reactive, computed } from 'vue'

type State = UnwrapRef<{ resetEmail: string }>

const scroll = useScroll()
const formForgotPasswordRef = ref()
const forgotPasswordRef = ref<HTMLElement>()
const formState: State = reactive({
  resetEmail: '',
})

const rules = {
  resetEmail: [
    { required: true, message: 'Пожалуйста, введите свою почту.', trigger: 'blur' },
  ],
}

function handleFinish(values: State) {
  store.dispatch('auth/resetPassword', values.resetEmail)
}

onMounted(() => scroll.to(forgotPasswordRef.value as HTMLElement))

const disabled = computed(() => formState.resetEmail === '')
</script>
