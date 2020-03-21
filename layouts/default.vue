<template>
    <div class="min-h-screen flex flex-col bg-light">
        <!-- Navigation -->
        <mobile-nav
            v-if="$store.state.isMobile"
            class="fixed bottom-0 w-full"
        />
        <desktop-nav v-else class="fixed top-0 w-full" />
        <!-- Content -->
        <div class="flex-1">
            <div :class="[$store.state.isMobile ? 'mb-20' : 'mt-16 sm:mt-20']">
                <!-- Navigation Bar -->
                <navigation
                    v-if="subNavigation && !$store.state.isMobile"
                    :items="subNavigation"
                    class="-mt-3 fixed w-full"
                />
                <div
                    v-if="subNavigation && !$store.state.isMobile"
                    class="py-4 sm:py-6"
                />
                <!-- Main Content -->
                <nuxt />
            </div>
        </div>
        <footer-nav
            :class="[$store.state.isMobile ? 'hidden' : 'mt-3']"
            :brand="!$store.state.isMobile"
        />
    </div>
</template>

<script>
import mobileNav from '@/components/organism/mobileNav'
import desktopNav from '@/components/organism/desktopNav'
import footerNav from '@/components/organism/footerNav'
import navigation from '@/components/organism/navigation'

export default {
    components: {
        mobileNav,
        desktopNav,
        footerNav,
        navigation
    },
    computed: {
        subNavigation(navigationItems) {
            return this.$route.matched.map((r) => {
                return r.components.default.options
                    ? r.components.default.options.subNavigation
                    : r.components.default.subNavigation
            })[0]
        }
    }
}
</script>
