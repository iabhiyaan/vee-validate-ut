<template>
    <div>
        <Field v-model="computedModelValue" name="first name" rules="required" v-slot="{ field, errorMessage }">
            <input v-bind="field" type="text" />
            <span class="mt-error">{{ errorMessage }}</span>
        </Field>
    </div>
</template>

<script setup>
import { Field } from "vee-validate";
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
    },
});

const emit = defineEmits(['update:modelValue'])

const computedModelValue = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

</script>
