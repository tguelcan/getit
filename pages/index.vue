<template>
    <div class="container mx-auto sm:py-0 sm:px-0">
        <!-- CTA Section -->
        <div
            class="flex flex-wrap bg-light text-primary my-4 justify-center content-center text-center"
        >
            <div class="w-full md:w-2/3 xl:w-1/2 mx-1">
                <div class="h-64 md:h-full">
                    <g-input
                        v-model="search"
                        placeholder="Suche"
                        type="text"
                    ></g-input>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center content-center">
            <div class="w-full md:w-2/3 xl:w-1/2 mx-1">
                <g-card headline="Hello">asd</g-card>
            </div>
        </div>
    </div>
</template>

<script>
import gCard from '@/components/molecules/card'
import gInput from '@/components/molecules/input'
// import gButton from '@/components/molecules/button'

export default {
    name: 'Index',
    middleware: ['authenticated'],
    components: {
        gCard,
        gInput
        // gButton
    },
    data: () => ({
        search: '',
        showBackToTop: true
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
