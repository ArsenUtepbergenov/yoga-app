<template>
  <a-avatar :size="160" :src="url" shape="square">
    <template #icon>
      <user-outlined v-if="!loading" />
      <a-spin v-if="loading" />
    </template>
  </a-avatar>
  <label class="upload-file-label">
    <input
      v-show="false"
      @change="handleChange"
      type="file"
      accept="image/jpeg, image/png, image/jpg"
    />
    <a-typography-text type="secondary" strong>Upload</a-typography-text>
  </label>
</template>

<script setup lang="ts">
import useFile from '@/hooks/useFile'
import { UserOutlined } from '@ant-design/icons-vue'

withDefaults(
  defineProps<{
    url: string
  }>(),
  {
    url: '',
  },
)

const { handleChange, loading } = useFile()
</script>

<style lang="scss">
.upload-file-label {
  margin-top: 10px;
  width: 160px;
  display: inline-block;
  text-align: center;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
