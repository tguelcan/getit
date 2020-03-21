<template>
    <div :class="{ 'pin-progress': pin }">
        <g-progressbar :progress-value="width" />
    </div>
</template>

<script>
import gProgressbar from '@/components/molecules/progressbar'
export default {
    name: 'GScrollProgressBar',
    components: {
        gProgressbar
    },
    props: {
        pin: {
            type: Boolean,
            default: true
        },
        height: {
            type: String,
            default: '.5rem'
        },
        zIndex: {
            type: String,
            default: '50'
        },
        backgroundColor: {
            type: String,
            default: 'linear-gradient(to right, #38C172, #51D88A)'
        },
        containerColor: {
            type: String,
            default: 'transparent'
        },
        barClass: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            width: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
        window.dispatchEvent(new Event('scroll'))
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            this.width = (window.scrollY / height) * 100
            const eventWidth = Math.ceil(this.width)
            if (eventWidth === 0) {
                this.$emit('begin')
            }
            if (eventWidth === 100) {
                this.$emit('complete')
            }
        }
    }
}
</script>

<style scoped>
.pin-progress {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
}
</style>
