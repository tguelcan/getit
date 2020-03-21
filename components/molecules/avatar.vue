<template>
    <div
        class="flex overflow-hidden"
        :class="[{ 'flex-row-reverse': left }, { hovered: imgLink }]"
        @click="goToTarget"
    >
        <img
            class="inline-block h-8 w-8 rounded-full"
            :class="[{ 'border border-primary': bordered }, custom]"
            :src="imgSrc"
            alt="avatar"
        />
        <span class="inline-block my-auto"><slot /></span>
    </div>
</template>

<script>
export default {
    name: 'GAvatar',
    props: {
        imgSrc: {
            type: String,
            default: '../img/defaultUserpic.gif'
        },
        imgLink: {
            type: String,
            default: null
        },
        left: {
            type: Boolean,
            default: false
        },
        custom: {
            type: String,
            default: null
        },
        bordered: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({}),
    methods: {
        goToTarget() {
            if (this.imgLink) {
                console.log(this.imgLink)
                this.$router.push(this.imgLink)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.hovered {
    &:hover {
        img {
            @apply border-info;
        }
        @apply cursor-pointer border-info;
    }
}
</style>
