<template>
    <Field v-model="computedModelValue" v-slot="{ errorMessage, field }" :name="name" :rules="rules">
        <input type="text" v-bind="field" />
        <span v-if="errorMessage" class="mt-error">{{ errorMessage }}</span>
    </Field>
</template>
  
<script setup>
import { Field } from "vee-validate";
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

const computedModelValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

</script>
  