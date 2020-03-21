<template>
    <div>
        <div v-if="borderTop" class="border-t border-light" />
        <div class="py-1">
            <nuxt-link
                v-for="(item, index) in menu"
                :key="index"
                :to="item.route"
                class="block px-4 py-2 leading-5 hover:bg-light focus:outline-none focus:bg-light"
            >
                {{ item.name }}
            </nuxt-link>
        </div>
        <div v-if="borderBottom" class="border-t border-light" />
    </div>
</template>

<script>
export default {
    name: 'GMenu',
    props: {
        menu: {
            type: Array,
            default: () => []
        },
        borderBottom: {
            type: Boolean,
            default: false
        },
        borderTop: {
            type: Boolean,
            default: false
        }
    }
}
</script>
