export default ({ store, app: { $axios } }) => {
    $axios.setToken(store.state.accessToken, 'Bearer')
}
