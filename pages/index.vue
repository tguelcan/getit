<template>
    <div class="container mx-auto sm:py-0 sm:px-0">
        <div
            class="flex flex-wrap bg-light text-primary md:mt-4 justify-center text-center"
        >
            <div class="w-full md:w-2/3 xl:w-1/2 mx-1">
                <div>
                    <g-card>
                        <g-input
                            v-model="zip"
                            placeholder="PLZ"
                            type="text"
                        ></g-input
                    ></g-card>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center content-center mt-3">
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
