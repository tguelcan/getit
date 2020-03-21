<template>
    <div
        class="info text-sm md:text-base"
        :class="[
            width,
            `info-${color}`,
            { 'info-frame': frame },
            { 'info-rounded': rounded },
            { 'info-rounded-full': roundedFull }
        ]"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'GButton',
    props: {
        color: {
            type: String,
            default: 'secondary'
        },
        rounded: {
            type: Boolean,
            default: false
        },
        roundedFull: {
            type: Boolean,
            default: false
        },
        frame: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: 'w-auto'
        }
    }
}
</script>

<style lang="scss" scoped>
$info-transition: all 0.15s ease 0;
@mixin info-bg($bgColor, $textColor) {
    @apply #{$bgColor} #{$textColor};
}

.info {
    transition: $info-transition;
    @apply bg-light text-dark text-center p-3 rounded-sm uppercase tracking-wide subpixel-antialiased;
    &-primary {
        @include info-bg('bg-primary', 'text-light');
    }
    &-secondary {
        @include info-bg('bg-light', 'text-dark');
    }
    &-info {
        @include info-bg('bg-info', 'text-dark');
    }
    &-tertiary {
        @include info-bg('bg-white', 'text-primary');
        @apply border border-primary;
    }
    &-success {
        @include info-bg('bg-success', 'text-light');
    }
    &-warning {
        @include info-bg('bg-warning', 'text-light');
    }
    &-danger {
        @include info-bg('bg-danger', 'text-light');
    }
    &-grey {
        @include info-bg('bg-white', 'text-dark');
        @apply border border-shadow;
    }
    &-frame {
        @apply text-left normal-case bg-transparent text-base;
    }
    &-rounded {
        @apply rounded-md;
    }
    &-rounded-full {
        @apply rounded-full;
    }
}
</style>
