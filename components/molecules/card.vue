<template>
    <div>
        <div class="shadow bg-white rounded-sm">
            <div v-if="hasHeaderSlot" class="p-5 border-t">
                <slot name="header" />
            </div>
            <div v-if="media">
                <img
                    :src="media"
                    class="w-full"
                    :class="{ 'rounded-t-sm': !hasHeaderSlot }"
                    data-pin-nopin="true"
                />
            </div>
            <div class="p-3 sm:p-5" :class="width">
                <!-- HEADER -->
                <div v-if="headline">
                    <h2>{{ headline }}</h2>
                </div>
                <div v-if="subtitle">
                    <span class="font-light text-grey cursor-default">{{
                        subtitle
                    }}</span>
                </div>
                <!-- BODY  -->
                <div
                    class="break-words cursor-default"
                    :class="{ 'mt-3': headline }"
                >
                    <slot />
                </div>
            </div>
            <div v-if="hasFooterSlot" class="p-5 border-t">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GCard',
    props: {
        headline: {
            type: String,
            default: null
        },
        subtitle: {
            type: String,
            default: null
        },
        width: {
            type: String,
            default: 'w-full'
        },
        media: {
            type: String,
            default: null
        }
    },
    data: () => ({}),
    computed: {
        hasFooterSlot() {
            return !!this.$slots.footer
        },
        hasHeaderSlot() {
            return !!this.$slots.header
        }
    }
}
</script>

<style lang="css" scoped></style>
