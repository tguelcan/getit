<template>
    <div :tabindex="_uid" @focusout="$emit('click-outside')">
        <slot>
            <div class="relative" :class="{ 'inline-block': !full }">
                <slot name="button" />
                <transition :name="animation">
                    <div
                        v-show="showContent"
                        class="dropdown-wrapper mt-2"
                        :class="[
                            { 'dropdown-full mt-0': full },
                            `${position}-0`
                        ]"
                    >
                        <slot name="content" />
                    </div>
                </transition>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'GDropdown',
    props: {
        showContent: {
            type: Boolean,
            default: true
        },
        animation: {
            type: String,
            default: 'fade'
        },
        full: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'right'
        }
    },
    data: () => ({})
}
</script>

<style lang="scss" scoped>
.dropdown {
    &-wrapper {
        @apply origin-top-right absolute w-56 rounded-sm shadow-lg bg-white z-30;
    }
    &-full {
        @apply relative w-full shadow-none rounded-sm;
    }
}
</style>
