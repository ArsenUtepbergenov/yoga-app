// The card teacher component

<template>
  <div class="card-teacher">
    <div class="card-teacher-image">
      <img :src="require(`@/assets/${imgUrl}`)" :alt="name" />
    </div>
    <div class="card-teacher-info">
      <h3 class="card-teacher-name">{{name}}</h3>
      <p>{{about}}</p>
    </div>
    <div v-for="(link, index) in socialMediaLinks" :key="index">
      {{link.vk}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-teacher',
  props: {
    imgUrl: String,
    name: String,
    about: String,
    socialMediaLinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>