import http from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        projects: [],
        projectName: 'New project',
        newProjectName: null
    },    
    mutations: {
        setNewProjectName(state, name) {
            state.newProjectName = name
        },
        setProjectName(state, name) {
            state.projectName = name
        },
        appendProject(state, project) {
            state.projects.push(project)
        },
        setProject(state, projects) {
            state.projects = projects
        },
        deleteProject(state, project) {
            state.projects.splice(state.projects.indexOf(project), 1)
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
        },
        updateProject({ state }, id) {
            return http().patch(`/projects/${id}`, {
                name: state.newProjectName
            })
        },
        deleteProject({ commit }, project) {
            return http().delete(`/projects/${project.id}`)
                .then(() => {
                    commit('deleteProject', project)
                })
        }
    }
}
