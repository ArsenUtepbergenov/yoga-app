<template>
  <div class="inline-message">
    Application status: <span class="inline-message-text">{{message}}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style lang="scss">
.inline-message {
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  color: white;
  background-color: var(--color-background);

  &-text {
    color: #bcec83;
    font-weight: bold;
  }
}
</style>
