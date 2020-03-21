<template>
    <label
        class="flex items-center checkbox"
        :class="[{ 'checkbox-required': required }, width]"
    >
        <input
            ref="inputElement"
            type="checkbox"
            class="checkbox"
            :class="[{ disabled: disabled }, width]"
            required
            :disabled="disabled ? '' : disabled"
            @input="updateValue"
        />
        <span class="ml-4"
            ><slot /><span v-if="required" class="text-lg font-bold"
                >*</span
            ></span
        >
    </label>
</template>

<script>
export default {
    name: 'GCheckbox',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        required: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
            default: 'w-auto'
        },
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateValue() {
            this.$emit('input', this.$refs.inputElement.checked)
        }
    }
}
</script>

<style lang="scss" scoped>
$checkbox-transition: all 0.15s ease 0s;
.checkbox {
    &-required {
    }
}
</style>
