import { expect } from "chai";
import { mount } from "@vue/test-utils";
import TextField from "@/components/TextField.vue";
import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";
import { globalValidators } from "@/main";


describe("TextField.vue", () => {
  globalValidators();
  it("show error message when modelValue is empty string and rules is set to required", async () => {
    const props = { modelValue: null, rules: "required", name: "role" };

    const wrapper = mount(TextField, {
      props,
    });

    const inputField = wrapper.find("input");

    inputField.setValue("");

    inputField.element.dispatchEvent(new Event("input"));
    inputField.element.dispatchEvent(new Event("blur"));

    await wrapper.vm.$nextTick();

    await flushPromises();

    await waitForExpect(
      () => {
        const errorMessage = wrapper.find(".mt-error")
        expect(errorMessage.exists()).to.be.true;
      },
      1000,
      500
    );
  });
});
