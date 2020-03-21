<template>
    <div class="flex flex-wrap items-center md:flex-no-wrap h-screen">
        <transition name="fade" mode="out-in">
            <div
                v-if="isLoading"
                class="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster text-gray-800"
                :style="{ backgroundColor: bgOverlayColor }"
            />
        </transition>
        <div class="w-full p-10 m-auto">
            <!-- 
            <img
                src="~assets/img/logo_text.svg"
                alt=""
                width="100"
                class="inline-block"
            />-->
            <p class="my-5">
                Willkommen auf <b>Get it!</b>. Deine Plattform ...
            </p>
            <div class="flex flex-wrap mb-3">
                <div class="w-full">
                    <g-button class="items-center my-1" disabled>
                        Login with E-Mail
                    </g-button>
                </div>
            </div>
            <hr class="my-6" />

            <!-- Using utilities: -->
            <g-button
                class="items-center my-1"
                :class="{ 'spinner-light': isLoading === 'facebook' }"
                @click="socialLogin('facebook')"
            >
                Login with Facebook
            </g-button>
            <g-button
                class="items-center my-1"
                :class="{ 'spinner-light': isLoading === 'google' }"
                @click="socialLogin('google')"
            >
                Login with Google
            </g-button>
        </div>
        <div class="hidden md:inline-block bg-warning h-screen w-full">
            <div
                class="container mx-auto h-full flex justify-center items-center"
            >
                <div
                    class="flex flex-wrap items-center text-center w-40 h-40 align-middle bg-white rounded-full justify-center items-center shadow-lg"
                >
                    <!--
                    <img
                        src="~assets/img/logo.svg"
                        alt=""
                        width="80"
                        class="inline-block"
                    />
                     -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import gButton from '@/components/molecules/button'

export default {
    middleware: 'notAuthenticated',
    layout: 'blanc',
    components: {
        gButton
    },
    data: () => ({
        isLoading: null,
        bgOverlayColor: 'rgba(255,255,255,.6)',
        haveError: {}
    }),
    methods: {
        ...mapActions(['loginWithSocial']),
        async socialLogin(provider) {
            try {
                this.haveError = {}
                this.isLoading = provider
                const { authResponse } = await this.$socialLoginService(
                    provider
                )
                await this.loginWithSocial({
                    accessToken: authResponse.access_token,
                    provider
                })
                await this.$router.push('/')
            } catch (e) {
                this.isLoading = false
                this.haveError = e?.error
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        // Fade to white and leave
        this.bgOverlayColor = 'rgba(255,255,255, 1)'
        next()
    }
}
</script>
