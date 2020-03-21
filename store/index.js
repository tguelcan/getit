export const state = () => {
    return {
        isMobile: false
    }
}

export const mutations = {
    setMobile(state) {
        state.isMobile = true
    }
}

export const actions = {
    nuxtServerInit({ commit, dispatch }, { app }) {
        if (this.$device.isMobile) {
            commit('setMobile')
        }
    }
}
