<template>
  <div v-if="isOpen" class="nimble-modal">
    <div class="modal-container" :style="{ 'min-width': minWidth + '%' }">
      <div class="modal-header" :class="headerClass">
        <div :class="headerStyle">
          <slot name="header">{{ title }}</slot>
        </div>
        <div v-if="!noEscape">
          <button class="close-button" @click="closeModal">
            <box-icon size="1rem" name="x" />
          </button>
        </div>
      </div>

      <div class="modal-content" :class="contentClass">
        <div :class="contentStyle">
          <slot>{{ content }}</slot>
        </div>
      </div>

      <div class="modal-footer" :class="footerClass">
        <div :class="footerStyle">
          <slot name="footer">
            <div v-if="acceptButtons">
              <nv-btn class="accept-button" @click="accept" hover
                >Accept</nv-btn
              >
            </div>
            <div v-if="acceptButtons">
              <nv-btn class="cancel-button" @click="closeModal" hover
                >Cancel</nv-btn
              >
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxIcon from "../../icons/BoxIcon.vue";
import NvBtn from "../nv-button/index.js";

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    noEscape: {
      type: Boolean,
      default: false,
    },
    acceptButtons: {
      type: Boolean,
      default: false,
    },
    closingKey: {
      type: String,
      default: "Escape",
    },
    minWidth: {
      type: Number,
      default: 30,
    },
    title: String,
    content: String,
    footer: String,
    headerClass: String,
    contentClass: String,
    footerClass: String,
    headerStyle: String,
    contentStyle: String,
    footerStyle: {
      type: String,
      default: "flex w-full justify-between",
    },
  },
  components: {
    BoxIcon,
    NvBtn,
  },
  mounted() {
    document.addEventListener("keyup", this.keyCloseListener);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.keyCloseListener);
  },
  methods: {
    closeModal() {
      this.$emit("update:isOpen", false);
    },
    accept() {
      this.$emit("accept");
    },
    keyCloseListener: function (evt) {
      if (evt.code === this.closingKey && this.isOpen) {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
.nimble-modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 0.375rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  min-width: 25%;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
}

.modal-content {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}
</style>
