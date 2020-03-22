<template>
    <div
        class="bg-primary z-50 px-3 sm:px-0 z-50"
        :class="{ alternate: alternate }"
    >
        <div class="container mx-auto">
            <div class="flex flex-shrink-0 mx-auto">
                <ul class="navigation flex select-none">
                    <li
                        v-for="(item, index) in items.leftNavigationContent"
                        :key="index"
                    >
                        <nuxt-link :to="item.route" :exact="item.exact">
                            {{ item.name }}
                        </nuxt-link>
                    </li>
                </ul>
                <ul class="navigation flex ml-auto">
                    <li
                        v-for="(item, index) in items.rightNavigationContent"
                        :key="index"
                    >
                        <nuxt-link v-if="!item.emit" :to="item.route" exact>
                            <i class="icon" :class="`i-${item.icon}`" />
                        </nuxt-link>
                        <button
                            v-else
                            class="navlink"
                            @click="emitAction(item.emit)"
                        >
                            <i class="icon" :class="`i-${item.icon}`" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // Name of the icon
        items: {
            type: Object,
            default() {
                return {}
            }
        },
        alternate: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        emitAction(action) {
            this.$root.$emit(action)
        }
    }
}
</script>

<style lang="scss" scoped>
.navlink {
    @apply inline-block align-middle transition-all duration-100 ease-in-out;
    @apply text-white p-4 font-bold;
    &:hover {
        @apply bg-info;
    }
    &.link-active,
    .link-active-exact {
        @apply bg-secondary;
    }
}

.navigation {
    ul {
        @apply m-0 p-0;
    }
    li a {
        @extend .navlink;
    }
}

.alternate {
    @apply bg-white;
    .navigation {
        li a {
            @apply text-primary;
            &:hover {
                @apply bg-info text-white;
            }
        }
    }
}
</style>
