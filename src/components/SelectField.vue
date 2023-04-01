<template>
  <div>
    <select v-model="computedModelValue" @focusout="onBlur">
      <option :value="option" :key="i" v-for="(option, i) in options">
        {{ option }}
      </option>
    </select>
    <span v-if="errorMessage" class="mt-error">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  rules: {
    type: [String, Object, Function],
  },
  name: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const {
  value: inputValue,
  handleChange,
  handleBlur,
  errorMessage,
  validate,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const computedModelValue = computed({
  get() {
    return inputValue.value;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function onBlur(e) {
  console.log("blur");
  validate();
  handleBlur();
  handleChange(e);
}
</script>
