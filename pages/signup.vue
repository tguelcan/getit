<template>
    <div>
        <!-- Modal -->
        <g-modal
            :show="submitted"
            centered
            :dismiss="false"
            confirm-text="Zur Anmeldung"
            @confirm="confirmModal"
            ><div class="flex flex-col">
                <img
                    src="~assets/img/happy.svg"
                    width="300"
                    alt=""
                    class="mx-auto"
                />
                <div>
                    <a
                        class="twitter-share-button"
                        href="https://twitter.com/intent/tweet?text=Ich helfe meiner Nachbarschaft! Du kannst das auch :)"
                        target="_blank"
                    >
                        Tweet</a
                    >
                </div>
                <div class="mt-3 text-xl font-bold text-primary">
                    Danke, dass du dich für Get it registriert hast, um Menschen
                    in deiner Nähe zu helfen!
                </div>
            </div>
        </g-modal>
        <!-- Page -->
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="w-full mb-2">
                    <nuxt-link to="/">
                        <i class="icon i-arrow-left"></i>Zurück
                    </nuxt-link>
                </div>
                <g-card headline="Registrieren">
                    <!-- Error Messages -->
                    <p>{{ haveError.message }}</p>
                    <ValidationObserver
                        ref="form"
                        v-slot="{ handleSubmit }"
                        slim
                    >
                        <form
                            class="w-full max-w-lg"
                            @submit.prevent="handleSubmit(submit)"
                        >
                            <!-- Username -->
                            <div class="form-wrap">
                                <div class="form-content w-full">
                                    <label class="block" for="name">
                                        Username
                                        <validation-provider
                                            v-slot="{ errors }"
                                            vid="name"
                                            mode="lazy"
                                            name="name"
                                            rules="required"
                                        >
                                            <input
                                                id="name"
                                                v-model="guest.name"
                                                class="form-input block w-full"
                                                :class="{
                                                    'form-has-danger': errors[0]
                                                }"
                                                type="text"
                                                placeholder="john doe"
                                            />
                                            <span class="text-danger text-xs">{{
                                                errors[0]
                                            }}</span>
                                        </validation-provider>
                                    </label>
                                </div>
                            </div>
                            <!-- E-Mail -->
                            <div class="form-wrap mt-3">
                                <div class="form-content w-full">
                                    <label class="block" for="email">
                                        E-Mail
                                        <validation-provider
                                            v-slot="{ errors }"
                                            vid="email"
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
                                            vid="password"
                                            mode="passive"
                                            name="password"
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
                            <div class="form-wrap mt-3">
                                <div class="form-content w-full">
                                    <label class="block" for="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <validation-provider
                                        v-slot="{ errors }"
                                        mode="passive"
                                        name="confirmPassword"
                                        rules="required|password:@password"
                                    >
                                        <input
                                            id="confirmPassword"
                                            v-model="guest.confirmPassword"
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
                                </div>
                            </div>
                            <!-- Buttons -->
                            <div class="form-wrap mt-3 text-right">
                                <div class="form-content ml-auto">
                                    <g-button class="button-link">
                                        Register
                                    </g-button>
                                </div>
                            </div>
                        </form>
                    </ValidationObserver>
                </g-card>
                <div class="w-full max-w-lg text-center mt-3">
                    <nuxt-link class="button button-link" to="/signin">
                        Account vorhanden?
                    </nuxt-link>
                    <div class="w-full max-w-lg">
                        <hr class="my-3" />
                    </div>
                    <logos />
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

import gModal from '@/components/organism/modal'
import logos from '@/components/organism/logos'

export default {
    name: 'Signin',
    layout: 'blanc',
    middleware: 'notAuthenticated',
    components: {
        ValidationObserver,
        ValidationProvider,
        gButton,
        gCard,
        gModal,
        logos
    },
    data() {
        return {
            isLoading: false,
            submitted: false,
            haveError: {},
            statusText: '',
            guest: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                accessToken: process.env.masterKey
            }
        }
    },
    methods: {
        ...mapActions({
            register: 'createUser'
        }),
        async submit(e) {
            try {
                await this.register(this.guest)
                this.submitted = true
                this.$refs.form.reset()
                this.guest = {}
                this.$nextTick(() => {
                    this.$refs.form.reset()
                })
            } catch ({ response }) {
                this.$refs.form.setErrors(response.data)
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
