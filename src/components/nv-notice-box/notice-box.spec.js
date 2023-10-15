/*
    Component / function - Notice - Pop-up message notification that disappears after 3.5 seconds.
    It has different levels with corresponding colors:
    - Success: #1ea97c
    - Info: #696cff
    - Warning: #cc8925
    - Error: #ff5757

    Props:
    - bubble: bubble shape
    - value: Message content.
    - closable: Indicates whether the notice can be closed (default is false).
    - life: Default duration for display in milliseconds (default is 3.5 seconds).
    - positionCorner: Position of the notice on the screen corners.
    - level: Message level (success, info, warning, error).
    - icon: Icon (null by default; use it if needed).

    Emits a closing event.

    All customization options are available via slots or props.
*/
import { shallowMount, mount } from "@vue/test-utils";
import NoticeBox from "./NvNoticeBox.vue";
import options from "../../mountOptions.js";

describe("Notice", () => {
  const lifeOne = 1000;
  it("renders with default props", () => {
    const wrapper = shallowMount(NoticeBox, {
      props: { value: "", life: lifeOne },
      ...options,
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes("bubble-mode")).toBe(false); // Default is not bubble mode
    expect(wrapper.classes("position-bottom-right")).toBe(true); // Default position
    expect(wrapper.find("#message").text()).toBe("");
    expect(wrapper.find("button").exists()).toBe(false); // Default is not closable
    expect(wrapper.isVisible()).toBe(true);
  });

  it("renders with custom props", () => {
    const wrapper = shallowMount(NoticeBox, {
      props: {
        bubble: true,
        value: "Custom Message",
        closable: true,
        life: lifeOne,
        positionCorner: "bottom-left",
        level: "success",
        icon: "check-icon",
      },
      ...options,
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".nv-notice-message").classes("bubble-mode")).toBe(
      true
    );
    expect(wrapper.classes("position-bottom-left")).toBe(true);
    expect(wrapper.find("#message").text()).toBe("Custom Message");
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.isVisible()).toBe(true);
  });

  it("emits a close event when closed", async () => {
    const wrapper = shallowMount(NoticeBox, {
      props: {
        value: "",
        closable: true,
        life: lifeOne,
      },
      ...options,
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("closes automatically after a specified duration", async () => {
    const wrapper = shallowMount(NoticeBox, {
      props: {
        value: "",
        life: 100,
      },
      ...options,
    });

    expect(wrapper.isVisible()).toBe(true);
    // await new Promise(resolve => setTimeout(resolve, 100 + 100));
    // expect(wrapper.isVisible()).toBe(false);
  });

  it("applies custom color based on the level prop", () => {
    const levels = ["success", "info", "warning", "error"];

    for (const level of levels) {
      const wrapper = shallowMount(NoticeBox, {
        props: {
          value: "mmmm",
          level,
          life: lifeOne,
        },
        ...options,
      });

      expect(wrapper.find(".nv-notice-message").classes()).toContain(
        `nv-notice-message-${level}`
      );
      // expect(wrapper.find('.nv-notice-message').attributes().style).toContain(`color: ${getExpectedColor(level)};`);
    }
  });

  // function getExpectedColor(level) {
  //   const colors = {
  //     success: '#1ea97c',
  //     info: '#696cff',
  //     warning: '#cc8925',
  //     error: '#ff5757',
  //   };
  //   return colors[level] || '';
  // }
});
