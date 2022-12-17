<template>
  <footer class="footer">
    <div class="footer-content"><CopyrightCircleOutlined />&nbsp;Сфера Yoga Hall</div>
  </footer>
</template>

<script setup lang="ts">
import { CopyrightCircleOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss">
.footer {
  height: 200px;
  background: linear-gradient(150deg, #4d9e6e, #7280d0);
  margin-top: 40px;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100%;
    font-size: 1.6rem;
  }
}
</style>
