<template>
  <i :class="iconClass"></i>
</template>

<script>
export default {
  props: {
    name: String,
    size: {
      type: String,
      default: '24px'
    },
    color: {
      type: String,
      default: 'currentColor'
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