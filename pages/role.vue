<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="flex flex-col text-center">
                    <h1 class="my-3">Wähle deine Rolle</h1>
                    <button
                        class="animated choose mt-4"
                        @click="updateUserAction('retailer')"
                    >
                        HABEN
                    </button>
                    <button
                        class="animated choose mt-4"
                        @click="updateUserAction('buyer')"
                    >
                        BRAUCHEN
                    </button>
                    <button
                        class="animated choose mt-4"
                        @click="updateUserAction('distributor')"
                    >
                        BRINGEN
                    </button>
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
        @apply shadow-xl;
    }
}
</style>
