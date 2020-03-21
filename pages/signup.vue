<template>
    <div>
        <div class="flex flex-wrap justify-center md:flex-no-wrap h-screen">
            <div class="w-full max-w-lg my-auto mx-3">
                <div class="w-full text-right">
                    <nuxt-link to="/">
                        <eva-icons name="close-outline" fill="#6d6d6d" />
                    </nuxt-link>
                </div>
                <h1 class="text-4xl font-serif">
                    Sign up
                </h1>
                <p class="my-5">Register a new <b>tutels</b> account.</p>
                <!-- Error Messages -->
                <p>{{ haveError.message }}</p>
                <ValidationObserver ref="form" v-slot="{ handleSubmit }" slim>
                    <form
                        class="w-full max-w-lg"
                        @submit.prevent="handleSubmit(submit)"
                    >
                        <!-- Username -->
                        <div class="form-wrap">
                            <div class="form-content w-full">
                                <label class="form-label" for="name">
                                    Username
                                </label>
                                <validation-provider
                                    v-slot="{ errors }"
                                    vid="name"
                                    mode="lazy"
                                    name="name"
                                    rules="required"
                                >
                                    <input
                                        id="name"
                                        v-model="user.name"
                                        class="form-input"
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
                            </div>
                        </div>
                        <!-- E-Mail -->
                        <div class="form-wrap">
                            <div class="form-content w-full">
                                <label class="form-label" for="email">
                                    E-Mail
                                </label>
                                <validation-provider
                                    v-slot="{ errors }"
                                    vid="email"
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
                        <!-- Password -->
                        <div class="form-wrap">
                            <div class="form-content w-full">
                                <label class="form-label" for="password">
                                    Password
                                </label>
                                <validation-provider
                                    v-slot="{ errors }"
                                    vid="password"
                                    mode="passive"
                                    name="password"
                                    rules="required|verify_password"
                                >
                                    <input
                                        id="password"
                                        v-model="user.password"
                                        class="form-input"
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
                        <div class="form-wrap">
                            <div class="form-content w-full">
                                <label class="form-label" for="confirmPassword">
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
                                        v-model="user.confirmPassword"
                                        class="form-input"
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
                        <div class="form-wrap">
                            <div class="form-content ml-auto">
                                <button class="button-link">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>

                <div class="w-full max-w-lg">
                    <hr class="mb-3" />
                </div>
                <div class="w-full max-w-lg text-center">
                    <nuxt-link class="text-primary" to="/signin">
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
    data() {
        return {
            isLoading: false,
            submitted: false,
            haveError: {},
            user: {
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
                await this.register(this.user)
                this.submitted = true
                this.$refs.form.reset()
                this.user = {}
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
