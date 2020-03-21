<template>
    <div>
        <hr
            class="hr-text"
            :data-content="content"
            :class="[`${position}`, `text-${color}`]"
        />
    </div>
</template>

<script>
export default {
    name: 'GSeparator',
    props: {
        content: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'center'
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    data: () => ({})
}
</script>

<style lang="scss" scoped>
.hr-text {
    @apply leading-none relative outline-none border-none h-5 subpixel-antialiased;
    &:before {
        content: '';
        // use the linear-gradient for the fading effect
        // use a solid background color for a solid bar
        @apply bg-shadow absolute left-0 w-full;
        top: 50%;
        height: 1px;
    }
    &:after {
        content: attr(data-content);
        @apply relative inline-block leading-tight;
        // this is really the only tricky part, you need to specify the background color of the container element...
        // Todo: text modifier
        // Todo: append bg
        @apply bg-white;
    }
}

// Text Positions
.left {
    @apply text-left;
    &:after {
        @apply pl-0 pr-2;
    }
}

.right {
    @apply text-right;
    &:after {
        @apply pr-0 pl-2;
    }
}

.center {
    @apply text-center;
    &:after {
        @apply px-2;
    }
}
</style>
