export const state = () => {
    return {
        accessToken: null,
        user: null,
        isMobile: false,
        online: true,
        isLoginPending: false,
        isResetPending: false
    }
}
export const mutations = {
    setToken(state, token) {
        state.accessToken = token
    },
    setUser(state, user) {
        state.user = user
    },
    setMobile(state) {
        state.isMobile = true
    },
    setLoginPending(state, status) {
        state.isLoginPending = status
    },
    setResetPending(state, status) {
        state.isResetPending = status
    }
}
export const actions = {
    async nuxtServerInit({ commit, dispatch }, { app }) {
        try {
            // Set SSR Token
            const accessToken = await this.$cookies.get('getit')
            app.$axios.setToken(accessToken, 'Bearer')
            commit('setToken', accessToken)
            // Get User Informations
            if (accessToken) {
                await dispatch('getMe')
            }
        } catch (e) {
            // Clean store if not exist
            await dispatch('logout')
        } finally {
            // Check if Mobile Device
            if (this.$device.isMobile) {
                commit('setMobile')
            }
        }
    },
    async loginWithSocial({ dispatch }, { accessToken, provider }) {
        const { data } = await this.$axios.post(`/api/auth/${provider}`, {
            token: accessToken
        })
        dispatch('setLocalUser', data)
        dispatch('getMe')
    },
    async loginWithEmail(
        { dispatch, commit },
        { email, password, accessToken }
    ) {
        commit('setLoginPending', true)
        const { data } = await this.$axios.post(`/api/auth`, {
            token: accessToken,
            email,
            password
        })
        dispatch('setLocalUser', data)
        dispatch('getMe')
        commit('setLoginPending', false)
    },
    async setLocalUser({ commit }, { token, user }) {
        // Set CSR Token
        await this.$axios.setToken(token, 'Bearer')
        await this.$cookies.set('getit', token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
        commit('setToken', token)
        commit('setUser', user)
    },
    async createUser({ commit }, { name, email, password, accessToken }) {
        await this.$axios.post(`/api/users`, {
            name,
            email,
            password,
            token: accessToken
        })
    },
    async updateUserRole({ commit }, { id, role, accessToken }) {
        await this.$axios.post(`/api/users/${id}`, {
            name,
            role,
            token: accessToken
        })
    },
    async forgotPassword({ dispatch }, { email, link, accessToken }) {
        await this.$axios.post(`/api/password-resets`, {
            email,
            link,
            token: accessToken
        })
    },
    async passwordReset({ dispatch, commit }, { token, password }) {
        commit('setResetPending', true)
        await this.$axios.patch(`/api/password-resets/${token}`, { password })
        commit('setResetPending', false)
    },
    async verifyToken({ dispatch }, { token }) {
        const { data } = await this.$axios.get(`/api/password-resets/${token}`)
        return data
    },
    async logout({ commit }) {
        await this.$axios.setToken(false)
        await this.$cookies.remove('getit')
        commit('setToken', null)
    },
    async getMe({ commit, dispatch }) {
        try {
            const { data } = await this.$axios.get('/api/users/me')
            commit('setUser', data)
        } catch (error) {
            await dispatch('logout')
        }
    },
    // Other Settings
    async hideWelcomePopup({ commit, dispatch, state }) {
        try {
            const { data } = await this.$axios.patch(
                `/api/users/${state.user.id}`,
                {
                    userSettings: { hideWelcomePopup: true }
                }
            )
            commit('setUser', data)
        } catch (error) {
            await dispatch('logout')
        }
    }
}

export const getters = {
    user: (state) => state.user,
    alerts: (state) => state.alerts
}
