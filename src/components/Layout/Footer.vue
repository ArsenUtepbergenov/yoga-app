// The footer application component

<template>
  <footer class="footer">
    <div class="footer-content"><CopyrightCircleOutlined />&nbsp;Сфера Yoga Hall</div>
  </footer>
</template>

<script lang="ts">
import { CopyrightCircleOutlined } from '@ant-design/icons-vue'

export default {
  name: 'app-footer',
  components: {
    CopyrightCircleOutlined
  }
}
</script>