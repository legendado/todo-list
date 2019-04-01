import createPersistedState from 'vuex-persistedstate'
import Authentication from './authentication'
import Projects from './projects'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: '/api'
  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    createPersistedState()
  ],
  modules: {
    Authentication,
    Projects     
  }
})
