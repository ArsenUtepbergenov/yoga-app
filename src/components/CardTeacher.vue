// The card teacher component

<template>
  <div class="card-teacher">
    <img
      class="card-teacher-image"
      :src="require(`@/assets/${imgUrl}`)"
      :alt="name" />
    <div class="card-teacher-info">
      <h3 class="card-teacher-name">{{name}}</h3>
      <p>{{about}}</p>
    </div>
    <div class="card-teacher-social-links-wrapper">
      <div class="card-teacher-social-links">
        <a
          v-for="(link, index) in socialMediaLinks"
          :key="index"
          :href="Object.values(link)"
          class="card-teacher-icon"
          target="_blank">
          <i
            class="fab"
            :class="`fa-${Object.keys(link)}`" />
        </a>
      </div>
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