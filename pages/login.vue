<template>
    <div>
        <!-- Install Modal -->
        <g-modal
            :show="showInstall && installer"
            centered
            confirm-text="Installieren"
            @confirm="installApp"
            @dismiss="showInstall = false"
            ><div class="flex flex-col">
                <img
                    src="~assets/img/install.svg"
                    width="300"
                    alt=""
                    class="mx-auto"
                />
                <div class="mt-4">
                    Du kannst unsere Anwendung auch Installieren. Somit hast du
                    sie jederzeit griffbereit!
                </div>
            </div>
        </g-modal>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3 text-center">
                <img
                    src="~assets/img/logo.png"
                    alt=""
                    width="180"
                    class="inline-block"
                />
                <g-card>
                    <p class="my-5">
                        Einer hat’s. Einer braucht’s. Einer bringt’s. Mit
                        <b>GET IT!</b> möchten wir lokale Einzelhändler und
                        Dienstleister unterstützen!
                    </p>
                    <div class="flex flex-wrap mb-3">
                        <div class="w-full">
                            <g-button
                                color="flat"
                                width="w-full"
                                class="items-center my-2"
                                @click="$router.push('/signin')"
                            >
                                Login with E-Mail
                            </g-button>
                        </div>
                    </div>
                    <hr class="my-6" />

                    <!-- Using utilities: -->
                    <g-button
                        class="items-center my-2"
                        width="w-full"
                        :class="{ 'spinner-light': isLoading === 'facebook' }"
                        @click="socialLogin('facebook')"
                    >
                        Login with Facebook
                    </g-button>
                    <g-button
                        class="items-center my-2"
                        width="w-full"
                        :class="{ 'spinner-light': isLoading === 'google' }"
                        @click="socialLogin('google')"
                    >
                        Login with Google
                    </g-button>
                </g-card>
                <logos />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import gCard from '@/components/molecules/card'
import gButton from '@/components/molecules/button'

import gModal from '@/components/organism/modal'
import logos from '@/components/organism/logos'

export default {
    middleware: 'notAuthenticated',
    layout: 'blanc',
    components: {
        gCard,
        gButton,
        gModal,
        logos
    },
    data: () => ({
        isLoading: null,
        bgOverlayColor: 'rgba(255,255,255,.6)',
        haveError: {},
        showInstall: false,
        installer: null
    }),
    mounted() {
        // show popup after 10 sek
        let installPrompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault()
            installPrompt = e
            this.showInstall = true
        })
        window.addEventListener('appinstalled', (evt) => {
            this.status = 'already installed'
        })
        this.installer = () => {
            this.showInstall = false
            installPrompt.prompt()
            installPrompt.userChoice.then((result) => {
                if (result.outcome === 'accepted') {
                    console.log('Install accepted!')
                } else {
                    console.log('Install denied!')
                }
            })
        }
    },
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
        },
        installApp() {
            if (this.installer) return this.installer()
        }
    },
    beforeRouteLeave(to, from, next) {
        // Fade to white and leave
        this.bgOverlayColor = 'rgba(255,255,255, 1)'
        next()
    }
}
</script>
