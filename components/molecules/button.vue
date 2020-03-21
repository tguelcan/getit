<template>
    <div>
        <button
            class="button text-sm md:text-base"
            :class="[
                `button-${color}`,
                { 'button-rounded': rounded },
                { 'button-rounded-full': roundedFull },
                { 'button-link': link },
                { 'button-disabled': disabled },
                width,
                custom
            ]"
            @click="$emit('click')"
        >
            <slot />
        </button>
    </div>
</template>
<script>
export default {
    name: 'GButton',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        rounded: {
            type: Boolean,
            default: false
        },
        link: {
            type: Boolean,
            default: false
        },
        roundedFull: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: 'w-auto'
        },
        custom: {
            type: String,
            default: 'custom'
        }
    }
}
</script>

<style lang="scss" scoped>
// Buttons
$button-transition: all 0.15s ease 0s;

@mixin button-bg($bgColor, $textColor, $bgHover) {
    @apply #{$bgColor} #{$textColor};
    &:hover {
        @apply #{$bgHover} shadow;
    }
    &:active {
        @apply shadow-sm;
    }
}

.button {
    transition: $button-transition;
    @apply py-2 px-4 rounded-sm shadow-sm uppercase font-bold tracking-widest select-none;
    &-link {
        @apply py-0 px-0 rounded-none shadow-none uppercase font-bold tracking-widest;
        &:hover {
            @apply bg-transparent #{!important};
        }
    }
    &-primary {
        @include button-bg('bg-primary', 'text-white', 'bg-secondary');
    }
    &-secondary {
        @include button-bg('bg-light', 'text-dark', 'bg-shadow');
    }
    &-tertiary {
        @include button-bg('bg-transparent', 'text-primary', 'bg-primary');
        @apply shadow-none border border-primary;
        &:hover {
            @apply text-white shadow-none;
        }
    }
    &-flat {
        @include button-bg('bg-transparent', 'text-primary', 'bg-light');
        @apply shadow-none;
        &:hover {
            @apply text-primary shadow-none;
        }
    }
    &-alternate {
        @include button-bg('bg-transparent', 'text-info', 'bg-secondary');
        @apply shadow-none;
        &:hover {
            @apply shadow-none text-white;
        }
    }
    &-rounded {
        @apply rounded-full;
        &-full {
            @apply shadow-md;
            @apply rounded-full p-0 w-12 h-12 leading-none;
            &:hover {
                @apply shadow-lg;
            }
            &:active {
                @apply shadow-sm;
            }
        }
    }
    &-disabled {
        @apply bg-light text-neutral shadow-xs;
        &:hover {
            @apply bg-light text-neutral shadow-xs cursor-default;
        }
    }
}
</style>
