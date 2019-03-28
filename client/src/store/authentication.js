import http from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerLogin: null,
        registerPassword: null,
        registerError: null,
        token: null
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
        setToken(state, token) {
            state.token = token
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password
        },
        setRegisterLogin(state, login) {
            state.registerLogin = login
        }
    },
    actions: {
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
                router.push('/')
            }).catch(() => {
                commit('setRegisterError', 'Account is already exist.')
            })
        }
    }
}