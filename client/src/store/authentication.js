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
    mutations: {
        setRegisterErrorNull(state) {
            state.registerError = null
        },
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
        register({ commit, state }) {
            return http().post('/auth/register', {
                email: state.registerEmail,
                username: state.registerLogin,
                password: state.registerPassword
            }).then(({ data }) => {
                commit('setToken', data.token)
                router.push('/')
            }).catch(() => {
                commit('setRegisterErrorNull')
            }).then(() => {
                commit('setRegisterError', 'Account is already exist.')
            })
        }
    }
}