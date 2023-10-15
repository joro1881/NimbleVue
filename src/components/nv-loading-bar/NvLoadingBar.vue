<template>
  <div class="loading-bar" :style="{ height: height, backgroundColor: background }">
    <div 
      class="indeterminate-bar" 
      v-if="mode === 'indeterminate'" 
      :style="{ backgroundColor: color }"
    />
    <div 
      v-else-if="mode === 'determinate'" 
      class="determinate-bar" 
      :style="{ backgroundColor: color }">
      {{ displayValue }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'indeterminate',
      validator: (value) => ['indeterminate', 'determinate'].includes(value),
    },
    value: {
      type: Number,
      default: null,
    },
    denominator: {
      type: Number,
      default: null,
    },
    height: {
      type: String,
      default: '0.25rem',
    },
    color: {
      type: String,
      default: '#0077cc',
    },
    background: {
      type: String,
      default: '#add8e657',
    }
  },
  computed: {
    displayValue() {
      if (this.mode === 'determinate') {
        if (this.denominator) {
          return `${this.value}/${this.denominator}`;
        } else {
          return `${this.value}%`;
        }
      }
      return '';
    },
  },
};
</script>

<style scoped>
.loading-bar {
  width: 100%;
  transition: width 0.3s ease-in-out;
}

.indeterminate-bar {
  width: 100%;
  height: 100%;
  animation: indeterminate-animation 2s infinite linear;
}

.determinate-bar {
  height: 100%;
}

@keyframes indeterminate-animation {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
</style>