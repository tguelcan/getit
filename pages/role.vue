<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="flex flex-col text-center">
                    <h1 class="my-3 font-bold">Wähle deine Rolle</h1>
                    <div
                        class="animated choose mt-4"
                        @click="updateUserAction('retailer')"
                    >
                        <h2 class="text-primary cursor-pointer">
                            Einzelhandel
                        </h2>
                        Ich biete Waren an...
                    </div>
                    <div
                        class="animated choose mt-4"
                        @click="updateUserAction('buyer')"
                    >
                        <h2 class="text-primary cursor-pointer">
                            Ich·benötige·etwas...
                        </h2>
                    </div>

                    <div
                        class="animated choose mt-4"
                        @click="updateUserAction('distributor')"
                    >
                        <h2 class="text-primary cursor-pointer">Lieferant</h2>
                        Ich liefere etwas!
                    </div>
                </div>
            </div>
        </div>
    </div></template
>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Role',
    layout: 'blanc',
    data: () => ({}),
    methods: {
        ...mapActions({
            update: 'updateUserRole'
        }),
        async updateUserAction(role) {
            await this.update(role)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.choose {
    @apply border font-bold tracking-wide p-5 py-10 text-center shadow-none rounded;
    &:hover {
        @apply shadow-xl cursor-pointer;
    }
}
</style>
