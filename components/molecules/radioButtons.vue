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
        <div class="mt-2">
            <label
                v-for="item in items"
                :key="item.text"
                class="radio-button inline-flex items-center"
            >
                <input
                    v-model="selected"
                    type="radio"
                    class="form-radio"
                    :value="item.value"
                    @input="updateValue"
                />
                <span class="ml-2">{{ item.text }}</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GRadioButtons',
    props: {
        required: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        selected: ''
    }),
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.radio-button {
    &:not(:first-of-type) {
        @apply ml-6;
    }
}
</style>
