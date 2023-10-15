/*
    Component / function - versatile button for general use

    Props:
      - type: A prop to specify the button type (e.g., primary, secondary, danger, success, etc.).
      - size: Allow users to set the button size (e.g., small, medium, large).
      - icon: Enable users to add an icon to the button.
      - disabled: A boolean prop to disable the button when true.
      - loading: Another boolean prop to display a loading spinner when true.
      - block: A boolean prop to make the button a block-level element, taking up the full width of its container.
      - outline: A boolean prop to switch between outlined and solid button styles.
      - rounded: Allow users to round the button's corners when true.
      - onClick: A function prop for handling click events.
      - customClass: A prop to add custom CSS classes to the button.

      - text: Allow users to set the button's text content.
      - href: If the button can act as a link, allow users to specify the URL.
      - target: If the button is a link, let users control the link target (e.g., _blank for opening in a new tab).
      - tooltip: Enable users to add a tooltip or hint text to the button.
      - color: Allow users to set a custom background color for the button.
      - hoverColor: Let users specify a custom background color on hover.
      - textColor: Enable users to set a custom text color.
      - hoverTextColor: Let users specify a custom text color on hover.
      - ariaLabel: Include accessibility support by allowing users to set ARIA labels for screen readers.

    Functions:
      - click: A method to programmatically trigger a button click.
      - reset: A method to reset the button's state (e.g., clear loading state).
      - focus: A method to set focus on the button.
      - blur: A method to remove focus from the button.
      - toggle: If the button can have a toggle state, implement a function to toggle between active and inactive states.
      - setActive: Allow users to programmatically set the button as active or inactive.
      - setLoading: A method to programmatically set the loading state.
      - setLabel: Enable users to change the button's label dynamically.
      - setDisabled: A function to programmatically enable or disable the button.
      - resetTooltip: If tooltips are implemented, provide a method to reset them.

    All customization options are available via slots or props.
*/
import { shallowMount } from "@vue/test-utils";
import options from "../../mountOptions.js";
import NvBtn from "./NvBtn.vue";

describe("NvBtn", () => {
  it("renders a primary button with text", () => {
    const wrapper = shallowMount(NvBtn, {
      propsData: { type: "primary", text: "Click me" },
      ...options,
    });

    expect(wrapper.classes()).toContain("primary");
    expect(wrapper.text()).toBe("Click me");
  });

  it("renders a large, secondary button with an icon", () => {
    const wrapper = shallowMount(NvBtn, {
      propsData: {
        type: "secondary",
        size: "lg",
        icon: "fa-icon",
        text: "Button",
      },
      ...options,
    });

    expect(wrapper.find("button").classes()).toContain("secondary");
    expect(wrapper.find("button").classes()).toContain("nv-btn-lg");
    expect(wrapper.find("box-icon").exists()).toBe(true);
    expect(wrapper.text()).toBe("Button");
  });

  it("disables the button when disabled prop is true", () => {
    const wrapper = shallowMount(NvBtn, {
      propsData: { disabled: true, text: "Button" },
      ...options,
    });

    expect(wrapper.find("button").attributes().disabled).toBe("");
  });

  it("shows a loading spinner when loading prop is true", () => {
    const wrapper = shallowMount(NvBtn, {
      propsData: { loading: true, text: "Button" },
      ...options,
    });

    expect(wrapper.find(".loading-spinner").exists()).toBe(true);
  });

  it("renders a block-level button", () => {
    const wrapper = shallowMount(NvBtn, {
      propsData: { block: true, text: "Button" },
      ...options,
    });

    expect(wrapper.find("button").classes()).toContain("block");
  });

  it("handles click events with the onClick function", async () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(NvBtn, {
      propsData: { type: "primary", text: "Button", onClick },
      ...options,
    });

    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
});
