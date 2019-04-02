import http from '../http'
// import router from '../router'

export default {
    namespaced: true,
    state: {
        projectName: 'New project',
        newProjectName: null,
        newTaskName: null,
        editTaskName: null,
        EditTask: false,
        projects: []
    },
    mutations: {
        // for Projecs
        setNewProjectName(state, name) {
            console.log("?????");
            state.newProjectName = name
        },
        setProjectName(state, name) {
            state.projectName = name
        },
        appendProject(state, project) {
            const proj = {
                project: project,
                task: []
            }
            state.projects.push(proj)
        },
        deleteProject(state, id) {
            const project = state.projects.find(x => x.project.id === id)
            state.projects.splice(state.projects.indexOf(project), 1)
        },
        clearProject(state) {
            state.projects = []
        },
        setProject(state, data) {
            state.projects.push(data)
        },

        // for Tasks
        setEditTask(state, value) {
            state.EditTask = value
        },
        setNewTaskName(state, name) {
            console.log("?????");
            state.editTaskName = name
        },
        createTask(state, newTask) {
            state.projects.find(x => x.project.id === newTask.project_id).task.push(newTask)
        }
    },
    actions: {
        getProjects({ commit }) {
            commit('clearProject')
            return http().get('/projects').then(({ data }) => {
                data.forEach(project => {
                    http().get(`/projects/${project.id}/tasks`).then(({ data }) => {
                        const mainObject = {
                            project: project,
                            task: data
                        }
                        commit('setProject', mainObject)
                    })
                })
            })
        },

        // Action for task
        createTask({ commit, state }, id) {
            return http().post(`/projects/${id}/tasks`, {
                name: state.newTaskName
            }).then(({ data }) => {
                commit('createTask', data)
            })
        },

        // Actions for project

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
        deleteProject({ commit }, id) {
            return http().delete(`/projects/${id}`)
                .then(() => {
                    commit('deleteProject', id)
                })
        }
    }
}
