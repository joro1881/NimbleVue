/*
    Component / function - a small line in the top section of the screen,
    indicating processing modes - indeterminate or determinate (with percent).

    Props:
    - modes: 'indeterminate' (default) or 'determinate' with a percent value.
    - value: Default is null.
    - denominator: Default is null. If given, it switches from percent to denominator.
    - height: Default is 0.375rem.
    - color: Default is light blue like laguna.
    - background: color Default is light blue like laguna

    All will be customizable via slots or props.

*/
import { shallowMount } from "@vue/test-utils";
import LoadingBar from "./NvLoadingBar.vue";

describe("LoadingBar.vue", () => {
  it("renders the indeterminate loading bar by default", () => {
    const wrapper = shallowMount(LoadingBar);
    expect(wrapper.find(".indeterminate-bar").exists()).toBe(true);
  });

  it('renders the determinate loading bar when "mode" prop is set', () => {
    const wrapper = shallowMount(LoadingBar, {
      props: { mode: "determinate", value: 50 },
    });
    expect(wrapper.find(".determinate-bar").exists()).toBe(true);
  });

  it('renders the percent value when in "determinate" mode', () => {
    const wrapper = shallowMount(LoadingBar, {
      props: { mode: "determinate", value: 75 },
    });
    expect(wrapper.find(".determinate-bar").text()).toContain("75%");
  });

  it('sets the height of the loading bar when "height" prop is provided', () => {
    const wrapper = shallowMount(LoadingBar, {
      props: { height: "0.5rem" },
    });
    expect(wrapper.find(".loading-bar").element.style.height).toBe("0.5rem");
  });

  it('sets the color of the loading bar when "color" prop is provided', () => {
    const wrapper = shallowMount(LoadingBar, {
      props: { color: "red", background: "red" },
    });
    expect(wrapper.find(".loading-bar").element.style.backgroundColor).toBe(
      "red"
    );
    expect(
      wrapper.find(".indeterminate-bar").element.style.backgroundColor
    ).toBe("red");
  });

  it('converts "value" to a denominator when "denominator" prop is provided', () => {
    const wrapper = shallowMount(LoadingBar, {
      props: { mode: "determinate", value: 25, denominator: 100 },
    });
    expect(wrapper.find(".determinate-bar").text()).toContain("25/100");
  });
});
