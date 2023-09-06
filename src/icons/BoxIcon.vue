<template>
  <i :class="iconClass" :style="{ 'font-size': size, color: color }"></i>
</template>

<script>
export default {
  props: {
    name: String,
    size: {
      type: String,
      default: '20px'
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      return `bx bx-${this.name}`;
    }
  }
};
</script>

<style scoped>
.bx {
  font-size: inherit;
  color: inherit;
}
</style>