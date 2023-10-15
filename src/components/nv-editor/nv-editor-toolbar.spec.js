import { shallowMount } from "@vue/test-utils";
import NvEditorToolbar from "./NvEditorToolbar.vue";

describe("NvEditorToolbar", () => {
  it('emits hide event when the "hide" button is clicked', async () => {
    const wrapper = shallowMount(NvEditorToolbar, {
      props: {
        identifier: "test",
      },
    });

    await wrapper.find("#hiding").trigger("click");
    expect(wrapper.emitted("hide")).toBeTruthy();
  });
});
