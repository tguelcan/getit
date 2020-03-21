<template>
    <div>
        <transition name="topModalBg">
            <div
                v-show="show"
                class="modal-bg"
                @click="$emit('dismiss')"
                @keyup.esc="$emit('dismiss')"
            ></div
        ></transition>
        <transition :name="full ? 'fade' : 'topModal'">
            <div
                v-show="show"
                class="modal-wrapper"
                :class="[{ 'bg-white': full }]"
            >
                <div class="modal">
                    <div
                        class="modal-body max-w-md p-3 sm:p-8"
                        :class="[
                            { 'text-center': centered },
                            { 'max-w-xl': full }
                        ]"
                    >
                        <div>
                            <slot name="header"></slot>
                        </div>
                        <div class="mb-6 mt-3">
                            <slot />
                        </div>
                        <div
                            class="flex justify-end"
                            :class="{ 'justify-center': centered }"
                        >
                            <g-button
                                v-if="confirm"
                                class="mr-2"
                                @click="$emit('confirm')"
                                >{{ confirmText }}</g-button
                            >
                            <g-button
                                v-if="dismiss"
                                color="flat"
                                @click="$emit('dismiss')"
                                >{{ dismissText }}</g-button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { debounce } from 'lodash'
import gButton from '@/components/molecules/button'
export default {
    name: 'GModal',
    components: {
        gButton
    },
    props: {
        centered: {
            type: Boolean,
            default: false
        },
        full: {
            type: Boolean,
            default: false
        },
        confirm: {
            type: Boolean,
            default: true
        },
        show: {
            type: Boolean,
            default: true
        },
        confirmText: {
            type: String,
            default: 'Okay'
        },
        dismiss: {
            type: Boolean,
            default: true
        },
        dismissText: {
            type: String,
            default: 'Cancel'
        }
    },
    data: () => ({}),
    watch: {
        show(newValue, oldValue) {
            const rootBody = document.getElementsByTagName('body')[0]
            if (newValue) rootBody.classList.add('overflow-hidden')
            else rootBody.classList.remove('overflow-hidden')
        }
    },
    mounted() {
        this.$root.$on(
            'keyDownEscape',
            debounce(() => {
                this.$emit('dismiss')
            }, 10)
        )
    }
}
</script>

<style lang="scss" scoped>
.modal {
    @apply h-screen w-full absolute flex items-center justify-center;
    &-wrapper {
        @apply z-50 fixed top-0 left-0 bottom-0 right-0;
    }
    &-bg {
        @apply z-50 fixed top-0 left-0 h-screen w-full bg-tertiary opacity-75;
    }
    &-body {
        @apply bg-white rounded-sm m-3 max-h-full;
    }
}
</style>
