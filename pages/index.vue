<template>
    <div class="container mx-auto sm:py-0 sm:px-0">
        <!-- CTA Section -->
        <div class="flex flex-wrap bg-light text-primary -mt-1">
            <div class="w-full md:w-1/2">
                <div
                    class="h-64 md:h-full bg-right bg-cover"
                    style="background-image: url('/img/mocks.png')"
                ></div>
            </div>
            <div class="w-full md:w-1/2 p-4 md:p-8 h-full select-none">
                <div class="my-auto">
                    <h2
                        class="text-3xl leading-9 font-bold tracking-tight text-primary sm:text-4xl sm:leading-10 my-2"
                    >
                        Get It!
                        <span
                            class="inline-block align-top font-light text-secondary text-xl leading-snug"
                            >Delivery</span
                        >
                        <br />
                    </h2>

                    <p>
                        Local Stores sell local goods to local clients brought
                        to them by local delivery services which are organized
                        by an intelligent ride sharing algorithm. Most of the
                        small commercials fear the loss of clients, so we bring
                        their goods to the clients directly by intelligently
                        hailing the delivery rides. This leads to localized
                        delivery services combined with lowest environmental
                        burden.
                    </p>
                    <g-install />
                </div>
            </div>
        </div>
        <g-card headline="Hello">asd</g-card>
    </div>
</template>

<script>
import gCard from '@/components/molecules/card'
// import gButton from '@/components/molecules/button'
import gInstall from '@/components/organism/install'

export default {
    name: 'Index',
    middleware: ['authenticated'],
    components: {
        gCard,
        // gButton,
        gInstall
    },
    subNavigation: {
        leftNavigationContent: [
            {
                name: 'Home',
                route: '/#'
            },
            {
                name: 'Page 2',
                route: '/#'
            }
        ],
        rightNavigationContent: [
            {
                name: 'Add',
                route: '/profile',
                icon: 'user'
            }
        ]
    },
    data: () => ({
        checkbox: false,
        showBackToTop: true,
        actionBarMenuItems: {
            leftNavigationContent: [
                {
                    name: 'Home',
                    icon: 'dash'
                },
                {
                    name: 'Share',
                    icon: 'share'
                }
            ],
            rightNavigationContent: [
                {
                    name: '2 items selected',
                    type: 'text',
                    class: 'border-r pr-6 text-light font-light'
                },
                {
                    name: 'Close'
                }
            ]
        },
        actionBarMenuItemsAlternate: {
            leftNavigationContent: [
                {
                    name: 'New',
                    icon: 'new-document'
                },
                {
                    name: 'Print',
                    icon: 'print'
                },
                {
                    name: 'upload',
                    icon: 'upload'
                }
            ],
            rightNavigationContent: [
                {
                    name: 'Important',
                    type: 'text',
                    class:
                        'border-l sm:border sm:border-dotted border-info font-light pl-2 sm:px-3'
                },
                {
                    icon: 'notifications'
                }
            ]
        }
    }),
    methods: {
        onSubmit(data) {
            console.log('Form', data)
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    @apply m-3 p-6 rounded select-none;
}
</style>
