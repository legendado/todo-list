import http from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerLogin: null,
        registerPassword: null,
        registerError: null,
        token: null,
        loginEmail: null,
        loginPassword: null,
        loginError: null
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token
        }
    },
    mutations: {
        setRegisterError(state, error) {
            state.registerError = error
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password
        },
        setRegisterLogin(state, login) {
            state.registerLogin = login
        },
        setToken(state, token) {
            state.token = token
        },
        setLoginEmail(state, email) {
            state.loginEmail = email
        },
        setLoginPassword(state, password) {
            state.loginPassword = password
        },
        setLoginError(state, error) {
            state.loginError = error
        }
    },
    actions: {
        login({ commit, state }) {
            commit('setLoginError', null)
            return http().post('/auth/login', {
                email: state.loginEmail,                
                password: state.loginPassword
            }).then(({ data }) => {
                commit('setToken', data.token)
                router.push('/projects')
            }).catch(() => {
                commit('setLoginError', 'Cannot find account. Try again!')
            })
        },
        logout({ commit }) {
            commit('setToken', null)
            router.push('/login')
        },
        register({ commit, state }) {
            commit('setRegisterError', null)
            return http().post('/auth/register', {
                email: state.registerEmail,
                username: state.registerLogin,
                password: state.registerPassword
            }).then(({ data }) => {
                commit('setToken', data.token)
                router.push('/projects')
            }).catch(() => {
                commit('setRegisterError', 'Account is already exist.')
            })
        }
    }
}