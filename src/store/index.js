import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: null
    },
    getters: {},
    mutations: {
        login(state, data) {
            state.user = data;
        },
        logout(state) {
            state.user = null;
        },
    },
    actions: {},
    modules: {}
})
