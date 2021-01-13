// The vertical card description component

<template>
  <div class="vertical-card-description">
    <img
      :src="require(`@/assets/${imgUrl}`)"
      :alt="title"
      class="vertical-card-description-image" />
    <div class="vertical-card-description-content">
      <h3>{{title}}</h3>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vertical-card-description',
  props: {
    imgUrl: String,
    title: String,
    text: String
  }
}
</script>