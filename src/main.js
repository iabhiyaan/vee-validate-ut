import { createApp } from "vue";
import App from "./App.vue";

import { defineRule } from "vee-validate";

import { required } from "@vee-validate/rules";

export function globalValidators() {
  defineRule("required", required);
}

globalValidators();

createApp(App).mount("#app");
