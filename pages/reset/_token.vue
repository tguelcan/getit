<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="w-full text-right">
                    <nuxt-link to="/">
                        Zurück
                    </nuxt-link>
                </div>
                <g-card headline="Neues Passwort">
                    <div class="flex">
                        <div class="w-full sm:w-1/2">
                            <div class="sm:flex mb-2">
                                <img
                                    class="h-16 w-16 rounded-full m-0 sm:mr-4"
                                    :src="guest.picture"
                                />
                                <div class="text-left">
                                    <h2 class="text-lg font-bold mt-2">
                                        {{ guest.name }}
                                    </h2>
                                    <div class="text-subtle">
                                        {{ guest.email }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Error Messages -->
                    <div
                        v-if="!isEmpty(haveError)"
                        class="text-danger border border-danger-light p-3 mb-3"
                    >
                        {{ haveError.message }}
                    </div>

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
                            <div class="form-wrap mt-3">
                                <div class="form-content w-full">
                                    <label class="block" for="email">
                                        Bitte geben Sie Ihr neues Passwort ein
                                        <validation-provider
                                            v-slot="{ errors }"
                                            name="password"
                                            mode="lazy"
                                            rules="required|verify_password"
                                        >
                                            <input
                                                id="password"
                                                v-model="password"
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
                            <div class="form-wrap text-right mt-3">
                                <div class="form-content ml-auto">
                                    <g-button
                                        color="primary"
                                        :class="{
                                            'spinner-light':
                                                $store.state.isResetPending
                                        }"
                                    >
                                        Speichern
                                    </g-button>
                                </div>
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
import gButton from '@/components/molecules/button'
import gCard from '@/components/molecules/card'

export default {
    name: 'Signin',
    components: {
        ValidationObserver,
        ValidationProvider,
        gCard,
        gButton
    },
    layout: 'blanc',
    middleware: 'notAuthenticated',
    async asyncData({ params, store, redirect }) {
        try {
            const guest = await store.dispatch('verifyToken', params)
            return { guest, token: params.token }
        } catch (e) {
            redirect('/forgot')
        }
    },
    data() {
        return {
            submitted: false,
            isLoading: false,
            haveError: {},
            password: ''
        }
    },
    methods: {
        ...mapActions({
            sendNewPassword: 'passwordReset'
        }),
        async submit(e) {
            try {
                await this.sendNewPassword({
                    password: this.password,
                    token: this.token
                })
                this.$refs.form.reset()
                this.password = ''
                this.$nextTick(() => {
                    this.$refs.form.reset()
                })
                this.submitted = true
            } catch ({ response }) {
                this.$refs.form.setErrors(response.data)
                this.$store.commit('setResetPending', false)
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
