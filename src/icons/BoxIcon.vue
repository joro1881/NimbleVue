<template>
  <i :class="iconClass" :style="{ 'font-size': size, color: color }"></i>
</template>

<script>
export default {
  props: {
    name: String,
    size: {
      type: String,
      default: 'unset'
    },
    color: {
      type: String,
      default: ''
    },
    type: String
  },
  computed: {
    iconClass() {
      return `bx bx${this.renderType}-${this.name}`;
    },
    renderType() {
      if (this.type === 'solid') {
        return 's';
      }

      if (this.type === 'logo') {
        return 'l';
      }

      return this.type;
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