<template>
  <div class="breadcrumb">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <router-link :to="{ name: home }">
          <home-outlined />
          {{ BreadcrumbsItems.home }}
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-if="currentRoute">
        {{ currentRoute }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { HomeOutlined } from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { RouteRecordName, RouterLink, useRoute } from 'vue-router'
import { BreadcrumbsItems, Pages } from '@/enums'

const home = Pages.HOME

type routeName = keyof typeof BreadcrumbsItems

const route = useRoute()
const currentRoute = ref<RouteRecordName>('')

watch(route, ({ name }) => {
  if (name === home) {
    currentRoute.value = ''
    return
  }

  if (currentRoute.value !== name)
    currentRoute.value = BreadcrumbsItems[name as routeName] as RouteRecordName
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 14px 30px;
}
</style>
