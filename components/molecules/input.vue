<template>
    <div>
        <label
            v-if="label.length > 0 || required"
            class="block text-sm font-bold mb-2 tracking-wider"
            for="username"
        >
            {{ label }}
            <span v-if="required" class="text-lg font-bold">*</span>
        </label>
        <input
            ref="inputElement"
            class="input"
            :class="[{ disabled: disabled }, width]"
            :type="type"
            :value="value"
            :placeholder="placeholder"
            :disabled="disabled ? '' : disabled"
            @input="updateValue()"
        />
    </div>
</template>

<script>
export default {
    name: 'GInput',
    props: {
        required: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: 'w-full'
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateValue() {
            this.$emit('input', this.$refs.inputElement.value)
        }
    }
}
</script>

<style lang="scss" scoped>
$input-transition: all 0.15s ease 0s;
.input {
    transition: $input-transition;
    @apply rounded-sm py-2 px-4 outline-none appearance-none border border-neutral;
    &.disabled {
        @apply cursor-not-allowed bg-light text-grey;
        pointer-events: none;
    }
    &:focus,
    &:hover {
        &:not(.disabled) {
            @apply border-primary;
        }
    }
}
</style>
