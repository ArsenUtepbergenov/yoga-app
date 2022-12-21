<template>
  <div class="breadcrumb">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <router-link :to="{ name: home }">
          <home-outlined />
          {{ routes.home }}
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
import { RouteRecordName, useRoute } from 'vue-router'
import { Pages } from '@/enums'

const home = Pages.HOME
const routes = {
  [home]: 'Дом',
  'forgot-password': 'Сбросить пароль',
  profile: 'Профиль',
  registration: 'Регистрация',
  login: 'Авторизация',
}

type routeName = keyof typeof routes

const route = useRoute()
const currentRoute = ref<RouteRecordName>('')

watch(route, ({ name }) => {
  if (name === home) {
    currentRoute.value = ''
    return
  }

  if (currentRoute.value !== name)
    currentRoute.value = routes[name as routeName] as RouteRecordName
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 14px 30px;
}
</style>
