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
                        <h2 class="text-primary cursor-pointer">Haben</h2>
                        Du hast ein lokales Geschäft und suchst nach Wegen,
                        Deine Waren ganz einfach online zu verkaufen?
                    </div>
                    <div
                        class="animated choose mt-4"
                        @click="updateUserAction('buyer')"
                    >
                        <h2 class="text-primary cursor-pointer">Brauchen</h2>
                        Ich brauche etwas Du brauchst jemanden, der Deine
                        Einkäufe für dich erledigt oder mit Deinem Hund gassi
                        geht?
                    </div>

                    <div
                        class="animated choose mt-4"
                        @click="updateUserAction('distributor')"
                    >
                        <h2 class="text-primary cursor-pointer">Bringen</h2>
                        Du kannst mit deinem Auto, Fahrrad oder zu Fuß
                        Bestellungen abholen und ausliefern?
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
