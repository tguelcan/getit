<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="w-full mb-2">
                    <nuxt-link to="/">
                        <i class="icon i-arrow-left"></i>Zurück
                    </nuxt-link>
                </div>
                <g-card headline="Login">
                    {{ haveError.message }}
                    <ValidationObserver v-slot="{ handleSubmit }" slim>
                        <form
                            class="w-full max-w-lg"
                            @submit.prevent="handleSubmit(submit)"
                        >
                            <!-- E-Mail -->
                            <div class="form-wrap">
                                <div class="form-content w-full">
                                    <label class="block" for="email">
                                        E-Mail
                                        <validation-provider
                                            v-slot="{ errors }"
                                            mode="lazy"
                                            name="email"
                                            rules="email"
                                        >
                                            <input
                                                id="email"
                                                v-model="guest.email"
                                                class="form-input block w-full"
                                                :class="{
                                                    'form-has-danger': errors[0]
                                                }"
                                                type="text"
                                                placeholder="john@bar.com"
                                            />
                                            <span class="text-danger text-xs">{{
                                                errors[0]
                                            }}</span>
                                        </validation-provider>
                                    </label>
                                </div>
                            </div>
                            <!-- Password -->
                            <div class="form-wrap mt-3">
                                <div class="form-content w-full">
                                    <label class="block" for="password">
                                        Password
                                        <validation-provider
                                            v-slot="{ errors }"
                                            name="password"
                                            mode="lazy"
                                            rules="required|verify_password"
                                        >
                                            <input
                                                id="password"
                                                v-model="guest.password"
                                                class="form-input block w-full"
                                                :class="{
                                                    'form-has-danger': errors[0]
                                                }"
                                                type="password"
                                                placeholder="******************"
                                            />
                                            <span class="text-danger text-xs">{{
                                                errors[0]
                                            }}</span>
                                        </validation-provider>
                                    </label>
                                </div>
                            </div>
                            <!-- Buttons -->
                            <div class="flex mt-3">
                                <div class="form-content mt-2">
                                    <nuxt-link
                                        to="/forgot"
                                        class="button button-link pl-0"
                                    >
                                        Probleme beim Login?
                                    </nuxt-link>
                                </div>
                                <div class="form-content ml-auto">
                                    <g-button
                                        color="primary"
                                        :class="{
                                            'spinner-light':
                                                $store.state.isLoginPending
                                        }"
                                    >
                                        Sign in
                                    </g-button>
                                </div>
                            </div>
                        </form>
                    </ValidationObserver>
                </g-card>
                <logos />

                <!-- Error Messages -->

                <div class="w-full max-w-lg">
                    <hr class="mb-3" />
                </div>
                <div class="w-full max-w-lg text-center">
                    <nuxt-link class="button-link" to="/signup">
                        Create a account
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'

import gCard from '@/components/molecules/card'
import gButton from '@/components/molecules/button'
import logos from '@/components/organism/logos'

export default {
    name: 'Signin',
    layout: 'blanc',
    middleware: 'notAuthenticated',
    components: {
        ValidationObserver,
        ValidationProvider,
        gCard,
        gButton,
        logos
    },
    data: () => ({
        isLoading: false,
        haveError: {},
        guest: {
            email: '',
            password: '',
            accessToken: process.env.masterKey
        }
    }),
    methods: {
        ...mapActions({
            login: 'loginWithEmail'
        }),
        async submit(e) {
            try {
                this.haveError = {}
                await this.login(this.guest)
                await this.$router.push('/')
            } catch (e) {
                this.$store.commit('setLoginPending', false)
                this.haveError = {
                    message: `E-Mail or Password wrong!`
                }
            }
        }
    }
}
</script>

<style lang="css" scoped></style>
