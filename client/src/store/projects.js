import http from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        projects: [],
        projectName: 'New project'
    },
    getters: {

    },
    mutations: {
        setProjectName(state, name) {
            state.projectName = name
        },
        appendProject(state, project) {
            state.projects.push(project)
        },
        setProject(state, projects) {
            state.projects = projects
        }
    },
    actions: {
        fetchProjects({ commit, state }) {
            state.projects = null
            return http().get('/projects').then(({ data }) => {
                commit('setProject', data)
            })
        },
        createProject({ commit, state }) {
            return http().post('/projects', {
                name: state.projectName
            }).then(({ data }) => {
                commit('appendProject', data)
            })
        }
    }
}