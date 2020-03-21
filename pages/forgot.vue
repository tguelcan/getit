<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="w-full text-right">
                    <nuxt-link to="/">
                        Back
                    </nuxt-link>
                </div>
                <h1 class="text-4xl font-serif">
                    Forgot Password
                </h1>
                <p class="my-5">
                    Just reset your password and look in your mailbox.
                </p>
                <!-- Error Messages -->
                {{ haveError.message }}
                <ValidationObserver ref="form" v-slot="{ handleSubmit }" slim>
                    <form
                        class="w-full max-w-lg"
                        @submit.prevent="handleSubmit(submit)"
                    >
                        <!-- E-Mail -->
                        <div class="form-wrap">
                            <div class="form-content w-full">
                                <label class="form-label" for="email">
                                    E-Mail
                                </label>
                                <validation-provider
                                    v-slot="{ errors }"
                                    mode="lazy"
                                    name="email"
                                    rules="email"
                                >
                                    <input
                                        id="email"
                                        v-model="user.email"
                                        class="form-input"
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
                            </div>
                        </div>
                        <!-- Buttons -->
                        <div class="form-wrap">
                            <div class="form-content ml-auto">
                                <button class="button-primary">
                                    Verify
                                </button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>

                <div class="w-full max-w-lg">
                    <hr class="mb-3" />
                </div>
                <div class="w-full max-w-lg text-center">
                    <nuxt-link class="button-link" to="/signin">
                        Sign in with an existing account
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'
export default {
    name: 'Signin',
    layout: 'blanc',
    middleware: 'notAuthenticated',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({
        submitted: false,
        saved: false,
        isLoading: false,
        haveError: {},
        user: {
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
                await this.forgot(this.user)
                this.$refs.form.reset()
                this.user = {
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
