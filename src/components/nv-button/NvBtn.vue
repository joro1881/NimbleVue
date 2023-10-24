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
    @blur="blur"
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
