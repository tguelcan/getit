const endPoint = `entries`

export const state = () => ({
    list: [],
    listMy: [],
    zip: null,
    isGetPending: false,
    isCreatePending: false,
    isUpdatePending: false,
    isDeletePending: false
})

export const mutations = {
    setData: (state, data) => {
        state.list = data
    },
    setMyData: (state, data) => {
        state.listMy = data
    },
    setZip: (state, zip) => {
        state.zip = zip
    },
    setGetPending: (state) => {
        state.isGetPending = true
    },
    unsetGetPending: (state) => {
        state.isGetPending = false
    },
    setCreatePending: (state) => {
        state.isCreatePending = true
    },
    unsetCreatePending: (state) => {
        state.isCreatePending = false
    },
    setUpdatePending: (state) => {
        state.isUpdatePending = true
    },
    unsetUpdatePending: (state) => {
        state.isUpdatePending = false
    },
    setDeletePending: (state) => {
        state.isDeletePending = true
    },
    unsetDeletePending: (state) => {
        state.isDeletePending = false
    }
}

export const actions = {
    // Get All
    async getAll({ commit, state }, params) {
        try {
            commit('setGetPending')
            const data = await this.$axios.$get(
                `/api/${endPoint}`,
                params ? { params } : null
            )
            commit('setData', data)
            commit('unsetGetPending')
        } catch (error) {
            commit('unsetGetPending')
        }
    },

    // Get All my Entries
    async getAllMy({ commit, state }, params) {
        try {
            commit('setGetPending')
            const data = await this.$axios.$get(`/api/${endPoint}/me`)
            commit('setMyData', data)
            commit('unsetGetPending')
        } catch (error) {
            commit('unsetGetPending')
        }
    },

    // Get One
    async getOne({ commit }, id) {
        try {
            const data = await this.$axios.$get(`/api/${endPoint}/${id}`)
            return data
        } catch (error) {}
    },

    // Post
    async create({ dispatch, commit, state }, data) {
        commit('setCreatePending')
        await this.$axios.post(`/api/${endPoint}`, data)
        commit('unsetCreatePending')
    },

    // Put
    async update({ dispatch, commit, state }, data) {
        commit('setUpdatePending')
        await this.$axios.put(`/api/${endPoint}/${data.id}`, data)
        commit('unsetUpdatePending')
    },

    // Delete
    async delete({ dispatch, commit }, data) {
        commit('setDeletePending')
        await this.$axios.delete(`/api/${endPoint}/${data.id}`)
        commit('unsetDeletePending')
    },

    // Post
    setZip({ commit }, zip) {
        commit('setZip', zip)
    }
}

// List getter
export const getters = {
    list: (state) => state.list,
    listMy: (state) => state.listMy,
    zip: (state) => state.zip
}
