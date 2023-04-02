import { createApp } from "vue";
import App from "./App.vue";

import { defineRule, configure } from "vee-validate";

import { required } from "@vee-validate/rules";

export function globalValidators() {
  defineRule("required", required);
}

export function configureValidators() {
  configure({
    generateMessage(context) {
      const fieldName = context.field;

      const messages = {
        required: `The ${fieldName} field is required.`,
      };
      return messages[context.rule.name]
        ? messages[context.rule.name]
        : `The ${fieldName} field is invalid.`;
    },
  });
}

globalValidators();
configureValidators();

createApp(App).mount("#app");
