<template>
    <span
        class="tag text-xs md:text-base"
        :class="[`tag-${color}`, { 'tag-large': large }]"
        @click="$emit('click')"
    >
        <slot />
    </span>
</template>
<script>
export default {
    name: 'GTag',
    props: {
        color: {
            type: String,
            default: 'default'
        },
        large: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin tag-bg($bgColor, $textColor) {
    @apply #{$bgColor} #{$textColor};
}

.tag {
    @apply px-2 inline-flex items-center text-sm leading-5 subpixel-antialiased rounded-full text-white align-middle;

    &-large {
        @apply px-4 text-base py-1;
    }
    // Icon fix positions
    .icon {
        line-height: 1;
        font-size: 1.1em;
        padding: 0 0.1em 0 0.1em;
    }
    &-button {
        line-height: 1;
        font-size: 1.1em;
        padding: 0.1em 0 0 0.1em;
    }
    &-default {
        @include tag-bg('bg-neutral', 'text-white');
    }
    &-primary {
        @include tag-bg('bg-primary', 'text-white');
    }
    &-secondary {
        @include tag-bg('bg-light', 'text-dark');
    }
    &-tertiary {
        @include tag-bg('bg-white', 'text-primary');
        @apply shadow-none border border-primary;
    }
    &-flat {
        @include tag-bg('bg-white', 'text-primary');
        @apply shadow-none;
    }
    &-warning {
        @include tag-bg('bg-warning', 'text-white');
    }
    &-success {
        @include tag-bg('bg-success', 'text-white');
    }
    &-danger {
        @include tag-bg('bg-danger', 'text-white');
    }
}
</style>
