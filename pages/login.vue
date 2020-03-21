<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <!-- 
            <img
                src="~assets/img/logo_text.svg"
                alt=""
                width="100"
                class="inline-block"
            />-->
                <g-card>
                    <p class="my-5">
                        Willkommen auf <b>Get it!</b>. Deine Plattform ...
                    </p>
                    <div class="flex flex-wrap mb-3">
                        <div class="w-full">
                            <g-button
                                color="flat"
                                class="items-center my-1"
                                @click="$router.push('/signin')"
                            >
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
                </g-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import gCard from '@/components/molecules/card'
import gButton from '@/components/molecules/button'

export default {
    middleware: 'notAuthenticated',
    layout: 'blanc',
    components: {
        gCard,
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
