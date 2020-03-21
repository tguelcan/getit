<template>
    <nav
        class="bg-tertiary py-4 z-50 px-3 sm:px-0"
        :class="{ alternate: alternate }"
    >
        <div class="flex items-center flex-shrink-0 container mx-auto">
            <!-- Brand Area Content -->
            <div class="brand hidden sm:block">
                <nuxt-link to="/">
                    <span
                        class="brand align-middle font-bold text-2xl select-none"
                        >Get It!</span
                    >
                </nuxt-link>
            </div>
            <!-- Navigation Area -->
            <ul class="navigation flex sm:ml-6 select-none">
                <li
                    v-for="(nav, index) in mainNavigationContent"
                    :key="index"
                    class="mr-6"
                >
                    <nuxt-link
                        class="desktopNav-button"
                        :to="nav.route"
                        :exact="nav.exact"
                        >{{ nav.name }}</nuxt-link
                    >
                </li>
            </ul>
            <!-- Right Navigation Area -->
            <ul class="navigation flex ml-auto select-none">
                <li class="ml-3 hidden sm:block">
                    <g-avatar
                        img-src="../img/userpic.jpg"
                        img-link="/profile"
                        left
                        bordered
                        custom="border border-2"
                        ><span class="mr-2">Clara Marlson</span></g-avatar
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import desktopPoints from './desktopNavigation.json'
import gAvatar from '@/components/molecules/avatar'

export default {
    components: { gAvatar },
    props: {
        alternate: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({ ...desktopPoints })
}
</script>

<style lang="scss" scoped>
.desktopNav {
    &-button {
        @apply inline-block text-info;

        &:hover {
            @apply text-white;
        }
    }
}

.brand {
    @apply text-white;
}

.navigation {
    a,
    ul,
    li {
        @apply text-info;
        &:hover {
            @apply text-white;
        }
    }
}

.alternate {
    @apply bg-white;
    .brand {
        @apply text-primary;
    }
    .navigation {
        a,
        ul,
        li {
            @apply text-primary;
            &:hover {
                @apply text-info;
            }
        }
    }
}
</style>
