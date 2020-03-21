<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="w-full">
                    <nuxt-link to="/">
                        Zurück
                    </nuxt-link>
                </div>
                <g-card headline="Passwort anfordern">
                    <!-- Error Messages -->
                    {{ haveError.message }}
                    <ValidationObserver
                        ref="form"
                        v-slot="{ handleSubmit }"
                        slim
                    >
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
                            <!-- Buttons -->
                            <div class="form-wrap text-right">
                                <g-button class="mt-2">
                                    Anfordern
                                </g-button>
                            </div>
                        </form>
                    </ValidationObserver>
                </g-card>

                <div class="w-full max-w-lg text-center mt-3">
                    <nuxt-link class="button-link" to="/signin">
                        Account vorhanden?
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

export default {
    name: 'Signin',
    layout: 'blanc',
    middleware: 'notAuthenticated',
    components: {
        ValidationObserver,
        ValidationProvider,
        gCard,
        gButton
    },
    data: () => ({
        submitted: false,
        saved: false,
        isLoading: false,
        haveError: {},
        guest: {
            email: '',
            password: '',
            link: `${process.env.appUrl}/reset`,
            accessToken: process.env.masterKey
        }
    }),
    methods: {
        ...mapActions({
            forgot: 'forgotPassword',
            sendNewPassword: 'passwordReset'
        }),
        async submit(e) {
            try {
                await this.forgot(this.guest)
                this.$refs.form.reset()
                this.guest = {
                    email: '',
                    password: '',
                    link: process.env.appUrl
                }
                this.$nextTick(() => {
                    this.$refs.form.reset()
                })
                this.submitted = true
            } catch ({ response }) {
                this.$refs.form.setErrors({
                    email: [response.data.message]
                })
            }
        },
        confirmModal() {
            this.submitted = false
            this.$router.push('/signin')
        }
    }
}
</script>

<style lang="css" scoped></style>
