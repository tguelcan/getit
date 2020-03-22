<template>
    <div class="container mx-auto sm:py-0 sm:px-0">
        <div class="flex flex-wrap justify-center content-center">
            <div class="w-full md:w-2/3 xl:w-1/2 mx-1">
                <g-card headline="Liste 1" class="mt-3">asd</g-card>
            </div>
        </div>
    </div>
</template>

<script>
import gCard from '@/components/molecules/card'
// import gButton from '@/components/molecules/button'

export default {
    name: 'Index',
    middleware: ['authenticated'],
    components: {
        gCard
        // gButton
    },
    data: () => ({
        zip: '',
        showBackToTop: true
    }),
    methods: {
        onSubmit(data) {
            console.log('Form', data)
        }
    }
}
</script>
