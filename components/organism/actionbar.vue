<template>
    <div class="bg-primary z-50 sm:px-0 z-50" :class="{ alternate: alternate }">
        <div class="container mx-auto px-3 md:px-6">
            <div class="flex flex-shrink-0 mx-auto">
                <ul
                    class="navigation flex text-sm md:text-base align-middle h-16 flex items-stretch mr-3"
                >
                    <li
                        v-for="(item, index) in items.leftNavigationContent"
                        :key="index"
                        class="ml-3 md:ml-6 self-center"
                        :class="item.class"
                    >
                        <button
                            :exact="item.exact"
                            @click="$emit(item.action || '')"
                        >
                            <i
                                v-if="item.icon"
                                class="icon leading-snug"
                                :class="`i-${item.icon}`"
                            />
                            <span
                                v-if="item.name"
                                class="inline-block align-middle"
                                >{{ item.name }}
                            </span>
                        </button>
                    </li>
                </ul>
                <ul
                    class="navigation ml-auto text-sm md:text-base h-16 flex items-stretch"
                >
                    <li
                        v-for="(item, index) in items.rightNavigationContent"
                        :key="index"
                        class="ml-3 md:ml-6 self-center"
                        :class="item.class"
                    >
                        <div v-if="item.type == 'text'">
                            <span
                                v-if="item.name"
                                class="inline-block align-middle"
                                >{{ item.name }} </span
                            ><i
                                v-if="item.icon"
                                class="icon"
                                :class="`i-${item.icon}`"
                            />
                        </div>
                        <button v-else exact @click="$emit(item.action || '')">
                            <i
                                v-if="item.icon"
                                class="icon"
                                :class="`i-${item.icon}`"
                            />
                            <span v-if="item.name">{{ item.name }} </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GActionbar',
    props: {
        items: {
            type: Object,
            required: true,
            default() {
                return []
            }
        },
        alternate: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({})
}
</script>

<style lang="scss" scoped>
.navigation {
    li,
    li button {
        @apply inline-block align-middle transition-all duration-100 ease-in-out;
        @apply text-white uppercase;
        &:first-child {
            @apply ml-0;
        }
    }
    li button {
        &:hover {
            @apply text-info;
        }
    }
}

.alternate {
    @apply bg-white;
    .navigation {
        li,
        li button {
            @apply text-primary;
        }
        li button {
            &:hover {
                @apply text-info;
            }
        }
    }
}
</style>
