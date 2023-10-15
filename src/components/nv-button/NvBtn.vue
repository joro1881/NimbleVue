<template>
  <button
    :class="[
      'nv-btn',
      `nv-btn-${size}`,
      'nv-btn-shadow',
      type,
      `rounded${rounded ? `-${rounded}` : ''}`,
      {
        block: block,
        loading: loading,
      },
      customClass,
      width,
      outline,
    ]"
    :disabled="disabled || loading"
    :style="{ backgroundColor: hovered ? hoverColor : color, color: textColor }"
    :aria-label="ariaLabel"
    :href="href"
    :target="target"
    :title="tooltip"
    @click="handleClick"
    @mouseenter="hovered = hover && true"
    @mouseleave="hovered = false"
  >
    <div class="flex justify-center content-center">
      <span v-if="loading" class="loading-spinner" />
      <slot v-else>
        <box-icon size="1rem" :name="icon" />
        <span>{{ text }}</span>
      </slot>
    </div>
    <!-- BoxIcon -->
  </button>
</template>

<script>
import BoxIcon from "../../icons/BoxIcon.vue";
export default {
  props: {
    type: {
      type: String,
      default: "primary", //secondary, danger, success'
    },
    size: {
      type: String,
      default: "sm",
    },
    width: {
      type: String,
      default: "w-full",
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    outline: Boolean, //class for border solid
    rounded: {
      type: String,
      default: "md", // 'sm, md, lg ...'
    },
    onClick: Function,
    customClass: String,
    text: String,
    href: String,
    target: String,
    tooltip: String,
    color: {
      type: String,
      default: "#4F46E5",
    },
    textColor: String,
    hover: {
      type: Boolean,
      default: false,
    },
    hoverColor: {
      type: String,
      default: "#4039bb",
    },
    ariaLabel: String,
  },
  components: {
    BoxIcon,
  },
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    handleClick() {
      if (!this.loading && this.onClick) {
        this.onClick();
      }
    },
    click() {
      if (!this.disabled && !this.loading) {
        this.$el.click();
      }
    },
    focus() {
      this.$el.focus();
    },
    blur() {
      this.$el.blur();
    },
  },
};
</script>
<style scoped>
.nv-btn {
  display: inline-block;
  cursor: pointer;
  /* -webkit-user-select: none;
  -moz-user-select: none; */
  /* user-select: none;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative; */
  color: #ffffff;
  align-items: center;
  text-align: center;
  font-size: 1rem;
}

.nv-btn-shadow {
  box-shadow: 2px 2px 4px 0 rgb(48 48 83 / 40%);
}

.nv-btn:active {
  box-shadow: 2px 2px 4px 0 rgb(48 48 83 / 50%);
  transform: translateY(1px);
}

.nv-btn-sm {
  font-size: 0.875rem;
  padding: 0.4rem 0.4rem;
}

.nv-btn-md {
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
}

.nv-btn-lg {
  font-size: 1.25rem;
  padding: 0.5rem 0.5rem;
}

.nv-btn-xl {
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem;
}

.loading-spinner {
  display: inline-block;
  position: relative;
  width: 24px; /* Adjust the width and height as needed */
  height: 24px;
}

.loading-spinner::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border: 2px solid #3498db; /* Adjust the color as needed */
  border-radius: 50%;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  animation: spin 1s linear infinite; /* Adjust animation duration as needed */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
