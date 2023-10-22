<template>
  <div
    v-show="loadingTime"
    :class="`w-72 fixed text-base nv-z-1104 position-${positionCorner}`"
  >
    <div
      class="nv-notice-message"
      :class="` ${bubble ? 'bubble-mode' : ''} nv-notice-message-${level}`"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="p-1 ml-2 flex justify-start items-center">
        <span :class="`nv-notice-message-icon-${level}`">
          <box-icon size="1rem" :name="noticeIcon" />
        </span>

        <div class="m-0 ml-1 w-full">
          <span class="font-bold">{{ noticeSummary }}</span>
          <div id="message" class="mt-2">{{ message }}</div>
        </div>

        <div v-if="closable">
          <button
            @click="close"
            class="pl-16 cursor-pointer"
            type="button"
            aria-label="Close"
          >
            <span class="text-xl pr-2">
              <box-icon size="1rem" name="x-circle" />
            </span>
            <span role="presentation" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxIcon from "../../icons/BoxIcon.vue";
export default {
  props: {
    bubble: {
      type: Boolean,
      default: null,
    },
    value: {
      type: [String, null],
      required: true,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    life: {
      type: Number,
      default: 3500,
    },
    positionCorner: {
      type: String,
      default: "bottom-right", // 'top-left', 'top-right', 'bottom-left'
    },
    level: {
      type: String,
      default: "info", // 'success', 'info', 'warning', 'error'
      validator: function (value) {
        const enumValues = ["success", "info", "warning", "error"];
        return enumValues.includes(value);
      },
    },
    icon: {
      type: String,
      default: "",
    },
  },
  components: {
    BoxIcon,
  },
  data() {
    return {
      success: "success",
      info: "info",
      warning: "warning",
      error: "error",
      noticeTitle: {
        success: "Success",
        info: "Information",
        warning: "Warning!",
        error: "Error Message",
      },
    };
  },
  mounted() {
    this.initiateSettings();
  },
  watch: {
    loadingTime() {
      this.initiateSettings();
    },
  },
  computed: {
    noticeIcon() {
      if (this.icon) {
        return this.icon;
      }

      if (this.level === this.info) {
        return `${this.info}-circle`;
      }

      if (this.level === this.success) {
        return "check";
      }

      if (this.level === this.warning) {
        return "message-alt-error";
      }
      //error

      return this.error;
    },
    messageType() {
      return this.level;
    },
    noticeSummary() {
      return this.noticeTitle[this.level];
    },
    loadingTime() {
      return this.life;
    },
    message() {
      return this.value;
    },
  },
  methods: {
    initiateSettings() {
      setTimeout(() => {
        this.close();
      }, this.loadingTime);
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.bubble-mode {
  border-radius: 50px !important;
}

.position-bottom-right {
  bottom: 20px;
  right: 20px;
}

.position-bottom-left {
  bottom: 20px;
  left: 20px;
}

.position-top-left {
  top: 20px;
  left: 20px;
}

.position-top-right {
  top: 20px;
  right: 20px;
}

.nv-notice-message {
  margin: 0 0 1rem 0;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 6px;
}

.nv-notice-message-success {
  background: #e4f8f0;
  border: solid #1ea97c;
  border-width: 0 0 0 6px;
  color: #1ea97c;
}

.nv-notice-message-info {
  background: #e9e9ff;
  border: solid #696cff;
  border-width: 0 0 0 6px;
  color: #696cff;
}

.nv-notice-message-warning {
  background: #fff2e2;
  border: solid #cc8925;
  border-width: 0 0 0 6px;
  color: #cc8925;
}

.nv-notice-message-error {
  background: #ffe7e6;
  border: solid #ff5757;
  border-width: 0 0 0 6px;
  color: #ff5757;
}

.nv-notice-message-icon-success {
  color: #1ea97c;
  font-size: 1.75rem !important;
  padding-right: 0.5rem;
}

.nv-notice-message-icon-error {
  color: #ff5757;
  font-size: 1.5rem !important;
  padding-right: 0.5rem;
}

.nv-notice-message-icon-warning {
  color: #89688c;
  font-size: 1.5rem !important;
  padding-right: 0.5rem;
}

.nv-notice-message-icon-info {
  color: #696cff;
  font-size: 1.5rem !important;
  padding-right: 0.5rem;
}

.nv-notice-message-enter-active {
  -webkit-transition: transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
}

.nv-notice-message-leave-active {
  -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s,
    margin-bottom 0.3s;
  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s,
    margin-bottom 0.3s;
}
</style>
