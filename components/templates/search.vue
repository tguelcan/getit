<template>
    <div>
        <transition name="topModalBg">
            <div
                v-show="show"
                class="search-bg"
                @click="$emit('dismiss')"
                @keyup.esc="$emit('dismiss')"
            ></div
        ></transition>
        <transition name="list">
            <div v-show="show" class="search justify-center">
                <div class="py-5 w-full sm:w-1/2">
                    <input
                        v-model="search.value"
                        class="search-input"
                        type="text"
                        placeholder="Suche"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { debounce } from 'lodash'

// import gButton from '@/components/molecules/button'
export default {
    name: 'GSearch',
    components: {
        // gButton
    },
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    data: () => ({
        search: {
            value: ''
        }
    }),
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
.search {
    @apply z-50 fixed flex text-white inset-x-0;
    &-bg {
        @apply z-40 fixed top-0 left-0 h-screen w-full bg-tertiary opacity-75;
    }
    &-body {
        @apply bg-primary;
    }
    &-input {
        $input-transition: all 0.15s ease 0s;
        transition: $input-transition;
        @apply rounded-sm py-3 px-6 outline-none appearance-none border border-info bg-primary w-full;
        &:focus,
        &:hover {
            &:not(.disabled) {
                @apply border-white;
            }
        }
    }
}
</style>
