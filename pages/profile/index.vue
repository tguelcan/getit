<template>
    <div class="container mx-auto">
        <g-card
            >{{ $store.state.user }}
            <g-button class="mt-3" @click="logoutUser">
                Logout
            </g-button></g-card
        >
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import gCard from '@/components/molecules/card'
import gButton from '@/components/molecules/button'
export default {
    name: 'Profil',
    middleware: 'authenticated',
    components: {
        gCard,
        gButton
    },
    data: () => ({}),
    methods: {
        ...mapActions(['logout']),
        async logoutUser() {
            await this.logout()
            await this.$router.push('/login')
        }
    }
}
</script>

<style lang="css" scoped />
