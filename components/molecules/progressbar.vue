<template>
    <div :class="[{ scrollStyle: alternate }, { small }]">
        <progress :max="max" :value="progressValue" />
    </div>
</template>

<script>
export default {
    name: 'GProgressbar',
    props: {
        alternate: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 100
        },
        progressValue: {
            type: Number,
            default: 0
        }
    },
    data: () => ({})
}
</script>

<style lang="scss" scoped>
progress {
    @apply inline-block w-full;
}
progress[value]::-webkit-progress-bar {
    @apply bg-light shadow-inner;
}
progress[value]::-webkit-progress-value {
    @apply bg-primary;
}

.scrollStyle {
    progress {
        @apply inline-block w-full;
    }
    progress[value]::-webkit-progress-bar {
        @apply bg-tertiary shadow-inner;
    }
    progress[value]::-webkit-progress-value {
        @apply bg-light;
    }
}

.small {
    progress[value]::-webkit-progress-bar {
        @apply h-1;
    }
}
</style>
