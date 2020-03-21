<template>
    <div>
        <!-- Example 1 -->
        <div class="bg-light">
            <div
                class="text-secondary max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
            >
                <h2
                    class="text-3xl leading-9 font-bold tracking-tight text-gray sm:text-4xl sm:leading-10"
                >
                    Ready to dive in?
                    <br />
                    <span class="text-primary">Start your project today.</span>
                </h2>
                <div class="mt-5 flex lg:flex-shrink-0 lg:mt-0">
                    <g-button rounded>
                        Get started
                    </g-button>
                    <g-button color="flat" class="ml-2" rounded>
                        Learn more
                    </g-button>
                </div>
            </div>
        </div>
        <!-- Example 2 -->
        <div class="bg-white mt-3">
            <div
                class="flex flex-col text-center mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 items-center content-center"
            >
                <div class="w-full">
                    <h2
                        class="text-3xl leading-9 font-bold tracking-tight text-gray sm:text-4xl sm:leading-10"
                    >
                        Ready to dive in?
                        <br />
                        <span class="text-primary"
                            >Start your project today.</span
                        >
                    </h2>
                </div>
                <div class="mt-5 flex">
                    <g-button>Get started</g-button>
                    <g-button color="flat" class="ml-2">
                        Learn more
                    </g-button>
                </div>
            </div>
        </div>
        <!-- Example 3 -->
        <div class="flex flex-wrap mt-3 bg-info text-light">
            <div class="w-full md:w-1/2">
                <div
                    class="h-64 md:h-full bg-right bg-cover"
                    style="background-image: url('/img/mocks.png')"
                />
            </div>
            <div class="w-full md:w-1/2 p-4 md:p-8 h-full">
                <div class="my-auto">
                    <span class="text-light text-xl">AWARD WINNING UI</span>
                    <h2
                        class="text-3xl leading-9 font-bold tracking-tight text-light sm:text-4xl sm:leading-10 my-4"
                    >
                        Ready to dive in?
                        <br />
                        <span class="text-light"
                            >Start your project today.</span
                        >
                    </h2>
                    <p>
                        Er hörte leise Schritte hinter sich. Das bedeutete
                        nichts Gutes. Wer würde ihm schon folgen, spät in der
                        Nacht und dazu noch in dieser engen Gasse mitten im übel
                        beleumundeten Hafenviertel?
                    </p>
                    <g-button color="primary" class="mt-4" rounded>
                        Learn more <i class="icon i-forwards" />
                    </g-button>
                </div>
            </div>
        </div>
        <!-- Example 4 -->
        <div class="flex flex-wrap mt-3 bg-tertiary text-light">
            <div class="w-full md:w-1/2">
                <div
                    class="h-64 md:h-full opacity-75 bg-right bg-cover"
                    style="background-image: url('/img/example.jpg')"
                />
            </div>
            <div class="w-full md:w-1/2 p-4 md:p-8 h-full">
                <div class="my-auto">
                    <span class="text-info text-xl">AWARD WINNING UI</span>
                    <h2
                        class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 my-4"
                    >
                        Ready to dive in?
                        <br />
                        <span class="text-white"
                            >Start your project today.</span
                        >
                    </h2>
                    <p>
                        Er hörte leise Schritte hinter sich. Das bedeutete
                        nichts Gutes. Wer würde ihm schon folgen, spät in der
                        Nacht und dazu noch in dieser engen Gasse mitten im übel
                        beleumundeten Hafenviertel?
                    </p>
                    <g-button color="alternate" class="mt-4" link>
                        Learn more <i class="icon i-forwards" />
                    </g-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gButton from '@/components/molecules/button'

export default {
    name: 'GCtaSection',
    components: {
        gButton
    },
    data: () => ({})
}
</script>

<style lang="css" scoped>
.text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
