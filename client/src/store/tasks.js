import http from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        allTasks: []
    },
    mutations: {
        setTask(state, tasks) {            
            state.allTasks = tasks
        }
    },
    actions: {
        fetchTasks({ commit, state }, id) {
            state.allTasks = null
            return http().get(`projects/${id}/tasks`).then(({ data }) => {                
                commit('setTask', data)
            })
        }
    }
}