<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <g-card headline="Wähle deine Rolle">
                    asasdasd
                </g-card>
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
        async updateUserAction() {
            await this.update()
            this.router.push('/')
        }
    }
}
</script>

<style lang="css" scoped></style>
