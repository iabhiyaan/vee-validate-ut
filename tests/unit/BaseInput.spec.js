import { expect } from "chai";

import BaseInput from "../../src/components/BaseInput.vue";
// import { Field } from "vee-validate";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";

describe("<BaseInput />", () => {
  it("should render Field component", () => {
    const props = { modelValue: "", name: "first name", rules: "" };
    const wrapper = mount(BaseInput, {
      props,
    });
    const fieldComponent = wrapper.findComponent({ name: "Field" });
    expect(fieldComponent.exists()).to.be.true;
  });

  it("should update input value when setValue is used", async () => {
    const props = { modelValue: "", name: "first name", rules: "" };
    const wrapper = mount(BaseInput, {
      props,
    });

    const value = "abhiyan";

    const input = wrapper.find("input");
    input.setValue(value);

    await wrapper.vm.$nextTick();

    expect(input.element.value).to.contain(value);
  });

  describe("rules: 'required'", () => {
    it("should show error message when input value is set to empty.", async () => {
      const props = { modelValue: "", name: "first name", rules: "required" };
      const wrapper = mount(BaseInput, {
        props,
      });

      const input = wrapper.find("input");

      input.setValue(null);

      await flushPromises();

      await waitForExpect(
        () => {
          const error = wrapper.find(".mt-error");

          expect(error.exists()).to.be.true;
          expect(error.text()).to.contain(`The ${props.name} field is required.`)
        },
        1000,
        500
      );
    });

    it("should not show error message when input value is set to a valid value.", async () => {
      const props = { modelValue: "", name: "first name", rules: "required" };
      const wrapper = mount(BaseInput, {
        props,
      });

      const input = wrapper.find("input");

      const value = "abhiyan";

      input.setValue(value);

      await flushPromises();

      await waitForExpect(
        () => {
          const error = wrapper.find(".mt-error");
          expect(error.exists()).to.be.false;
        },
        1000,
        500
      );
    });
  });
});
