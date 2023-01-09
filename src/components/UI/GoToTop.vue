<template>
  <a-button
    class="go-to-top-button"
    type="primary"
    shape="circle"
    @click="goToTop"
    size="large"
    danger
  >
    <template #icon><ArrowUpOutlined /></template>
  </a-button>
</template>

<script setup lang="ts">
import { ArrowUpOutlined } from '@ant-design/icons-vue'
import { useScroll } from '@/hooks'

const props = defineProps<{ element: HTMLElement }>()

const scroll = useScroll()

function goToTop() {
  scroll.to(props.element)
}
</script>

<style lang="scss" scoped>
.go-to-top-button {
  position: fixed;
  right: 24px;
  bottom: 30px;
  z-index: 1;
}
</style>
