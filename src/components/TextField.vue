<template>
  <div>
    <input
      v-model="computedModelValue"
      @blur="onBlur"
      @change="handleChange"
      type="text"
    />
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

function onBlur() {
  validate();
  handleBlur();
}
</script>
