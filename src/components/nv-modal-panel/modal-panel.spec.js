/*
  Component / function - modal panel that pops up with content.
  Closing - can be triggered by the escape button or a closing icon in the header (optional).
  Slots:
  - Header slot (optional)
  - Content slot (default)
  - Footer slot (optional), with optional default buttons.

  Props:
  - isOpen: Boolean to control the visibility of the modal.
  - noEscape: Boolean to hide the escape button.
  - acceptButtons: Boolean to show 'accept/cancel' buttons.
  - closingKey: String specifying the key event that will close the modal.
  - title: Content for the header if no slot is used.
  - content: Content for the body if no slot is used.
  - footer: Content for the footer if no slot is used.
  - headerClass: Styling class for the header content.
  - contentClass: Styling class for the content's content.
  - footerClass: Styling class for the footer content.
  - headerStyle: Inline style for the slot content.
  - contentStyle: Inline style for the slot content.
  - footerStyle: Inline style for the slot content.

  All will be customizable via slots or props.

  changes :
   events - update:isOpen, accept
   future prop for closing icon
   prop minWidth
*/
import { shallowMount } from "@vue/test-utils";
import ModalPanel from "./NvModalPanel.vue";
import options from "../../mountOptions.js";

describe("ModalPanel.vue", () => {
  it("renders the component with default props and slots", () => {
    const wrapper = shallowMount(ModalPanel, { ...options });

    expect(wrapper.isVisible()).toBe(false);
    expect(wrapper.find(".modal-header").exists()).toBe(false);
    expect(wrapper.find(".modal-content").exists()).toBe(false);
    expect(wrapper.find(".modal-footer").exists()).toBe(false);
  });

  it("renders the component with custom props and slots", async () => {
    const wrapper = shallowMount(ModalPanel, {
      props: {
        isOpen: true,
        noEscape: true,
        acceptButtons: true,
        closingKey: "Escape",
        title: "Custom Title",
        content: "Custom Content",
        footer: "Custom Footer",
        headerClass: "custom-header-class",
        contentClass: "custom-content-class",
        headerStyle: "custom-header-style-class",
        contentStyle: "custom-content-style-class",
        footerStyle: "custom-footer-style-class",
      },
      slots: {
        default: "Custom Default Slot",
      },
      ...options,
    });

    expect(wrapper.isVisible()).toBe(true);

    expect(wrapper.find(".modal-header").text()).toBe("Custom Title");
    expect(wrapper.find(".modal-content").text()).toBe("Custom Default Slot");
    expect(wrapper.find(".modal-header").classes().join(" ")).toMatch(
      "modal-header custom-header-class"
    );
    expect(wrapper.find(".modal-content").classes().join(" ")).toMatch(
      "modal-content custom-content-class"
    );

    expect(wrapper.find(".modal-header .close-button").exists()).toBe(false);
    expect(wrapper.find(".modal-footer .accept-button").exists()).toBe(true);
    expect(wrapper.find(".modal-footer .cancel-button").exists()).toBe(true);

    expect(wrapper.find(".custom-content-style-class").exists()).toBe(true);
    expect(wrapper.find(".custom-footer-style-class").exists()).toBe(true);
  });

  it("emits events when the modal is closed", async () => {
    const wrapper = shallowMount(ModalPanel, { ...options });
    await wrapper.setProps({ isOpen: true });
    const closeButton = wrapper.find(".modal-header .close-button");
    await closeButton.trigger("click");

    expect(wrapper.emitted("update:isOpen")).toBeTruthy();

    await wrapper.setProps({ isOpen: false });
    expect(wrapper.isVisible()).toBe(false);
  });

  it("renders the component with isOpen as false", () => {
    const wrapper = shallowMount(ModalPanel, {
      props: { isOpen: false },
      ...options,
    });

    expect(wrapper.isVisible()).toBe(false);
  });

  it("renders the component with noEscape as false", async () => {
    const wrapper = shallowMount(ModalPanel, {
      props: { isOpen: true, noEscape: false },
      ...options,
    });

    expect(wrapper.find(".modal-header .close-button").exists()).toBe(true);
  });

  it("renders the component with acceptButtons as false", async () => {
    const wrapper = shallowMount(ModalPanel, {
      props: { isOpen: true, acceptButtons: false },
      ...options,
    });

    expect(wrapper.find(".modal-footer .accept-button").exists()).toBe(false);
    expect(wrapper.find(".modal-footer .cancel-button").exists()).toBe(false);
  });
});
