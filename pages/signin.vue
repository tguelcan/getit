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
                    Sign in
                </h1>
                <p class="my-5">
                    Welcome to <b>tutels</b>. Sign in with your existing user
                    account.
                </p>
                <!-- Error Messages -->
                {{ haveError.message }}
                <ValidationObserver v-slot="{ handleSubmit }" slim>
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
                        <!-- Password -->
                        <div class="form-wrap">
                            <div class="form-content w-full">
                                <label class="form-label" for="password">
                                    Password
                                </label>
                                <validation-provider
                                    v-slot="{ errors }"
                                    name="password"
                                    mode="lazy"
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
                        <!-- Buttons -->
                        <div class="form-wrap">
                            <div class="form-content mt-2">
                                <nuxt-link
                                    to="/forgot"
                                    class="button-link pl-0"
                                >
                                    Help?
                                </nuxt-link>
                            </div>
                            <div class="form-content ml-auto">
                                <button
                                    class="button-primary"
                                    :class="{
                                        'spinner-light':
                                            $store.state.isLoginPending
                                    }"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>

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
export default {
    name: 'Signin',
    layout: 'blanc',
    middleware: 'notAuthenticated',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({
        isLoading: false,
        haveError: {},
        user: {
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
                await this.login(this.user)
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
