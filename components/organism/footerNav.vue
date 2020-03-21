<template>
    <div>
        <div
            class="bg-primary text-light cursor-default px-2 md:px-4 py-6 border-light border-t"
        >
            <div class="container mx-auto">
                <div class="flex flex-wrap overflow-hidden sm:-mx-2">
                    <div
                        class="w-full text-center md:text-left my-4 overflow-hidden sm:my-2 sm:px-2 md:w-1/3"
                    >
                        <!-- First Column Content -->
                        <ul class="menu">
                            <li>
                                <nuxt-link to="/imprint">
                                    Impressum
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/" exact>
                                    Nutzungsbedingungen
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/" exact>
                                    Datenschutzrichtlinie
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div
                        class="w-full text-center md:text-left my-6 overflow-hidden sm:my-2 sm:px-2 md:w-1/3"
                    >
                        <!-- Center Column Content -->
                        <p>
                            Deine Meinung und deine Vorschläge sind uns wichtig
                            um unser Service stätig zu verbessern.
                        </p>
                        <g-button class="mt-4" color="alternate" link>
                            Feedback
                        </g-button>
                    </div>
                    <div
                        class="w-full text-center md:text-right my-6 overflow-hidden sm:my-2 sm:px-2 md:w-1/3"
                    >
                        <!-- Last Column Content -->
                        <div class="flex content-end flex-wrap h-full">
                            <div class="w-full">
                                <g-button class="mt-4" color="alternate" link>
                                    <i class="icon i-information" />
                                </g-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-white py-10">
            <g-brand :width="200" />
        </div>
    </div>
</template>

<script>
import gBrand from '@/components/molecules/brand'
import gButton from '@/components/molecules/button'
export default {
    components: {
        gBrand,
        gButton
    }
}
</script>

<style lang="scss" scoped>
.menu {
    li,
    a {
        @apply text-info leading-relaxed;
        &:hover {
            @apply text-white;
        }
    }
}
</style>
