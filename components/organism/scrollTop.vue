<template>
    <transition name="slide-top-fade">
        <div
            v-show="showButton"
            class="scroll"
            :class="{ 'scroll-mobile': $store.state.isMobile }"
        >
            <g-button rounded-full custom="shadow-xl" @click="scrollTo">
                <i class="icon i-dropdown-open" /> <span id="counter"> </span>
            </g-button>
        </div>
    </transition>
</template>

<script>
import gButton from '@/components/molecules/button'

let i = 0

const inv = setInterval(function() {
    if (i < 20) return ++i
    else clearInterval(inv)
}, 1000 / 20)

export default {
    name: 'GScrollTop',
    components: {
        gButton
    },
    props: {
        offset: {
            type: Number,
            default: 100
        },
        scroll: {
            type: Number,
            default: 0
        }
    },
    data: () => ({
        showButton: true,
        lastScrollPosition: 0
    }),
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (
                Math.abs(currentScrollPosition - this.lastScrollPosition) <
                this.offset
            ) {
                return
            }
            this.showButton = currentScrollPosition >= this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        },
        scrollTo() {
            window.scrollTo(0, inv)
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll {
    @apply fixed z-50;
    bottom: 2rem;
    right: 2rem;
    &-mobile {
        right: 1rem;
        bottom: 4rem;
    }
}
</style>
