<template>
    <div class="container mx-auto">
        <div class="flex">
            <g-card class="w-full">
                <g-avatar
                    :img-src="$store.state.user.picture"
                    custom="my-auto mr-3 h-10 w-10"
                    ><ol>
                        <li class="leading-none font-bold text-dark">
                            {{ $store.state.user.name }}
                        </li>
                        <li class="leading-none text-grey">
                            <timeago
                                :datetime="$store.state.user.createdAt"
                            ></timeago>
                        </li></ol
                ></g-avatar>
                <g-button class="mt-3" @click="logoutUser">
                    Logout
                </g-button></g-card
            >
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import gCard from '@/components/molecules/card'
import gButton from '@/components/molecules/button'

import gAvatar from '@/components/molecules/avatar'

export default {
    name: 'Profil',
    middleware: ['authenticated'],
    components: {
        gCard,
        gButton,
        gAvatar
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
