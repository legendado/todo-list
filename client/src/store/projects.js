import http from '../http'

export default {
    namespaced: true,
    state: {
        projectName: 'New project',
        isEditProject: false,
        newProjectName: null,
        newTaskName: null,
        editTaskName: null,
        EditTask: false,
        status: null,
        projects: []
    },
    mutations: {
        // for Projecs
        setIsEditProject(state, value) {
            state.isEditProject = value
        },
        setNewProjectName(state, name) {
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
        deleteProject(state, data) {
            const project = state.projects.find(x => x.project.id === data.id)
            state.projects.splice(state.projects.indexOf(project), 1)
        },
        clearProject(state) {
            state.projects = []
        },
        setProject(state, data) {
            state.projects.push(data)
        },

        // for Tasks
        setStatus(state, value) {
            state.status = value
        },
        setEditTask(state, value) {
            state.EditTask = value
        },
        setNewTaskName(state, name) {
            state.newTaskName = name
        },
        setEditTaskName(state, name) {
            state.editTaskName = name
        },
        createTask(state, newTask) {
            state.projects.find(x => x.project.id === newTask.project_id).task.push(newTask)
        },
        deleteTask(state, data) {
            const dropped = state.projects.find(x => x.project.id === data.project_id).task.find(x => x.id === data.id)
            state.projects.find(x => x.project.id === data.project_id).task.splice(
                state.projects.find(x => x.project.id === data.project_id).task.indexOf(dropped), 1
            )
        }
    },
    actions: {
        async getProjects({ commit }) {
            await commit('clearProject')
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
        updateTask({ state }, id) {
            return http().patch(`/tasks/${id}`, {
                name: state.editTaskName
            })
        },
        updateStatus({ commit, state }, id) {
            return http().patch(`/tasks/${id}`, {
                status: state.status
            })
        },
        deleteTask({ commit }, id) {
            return http().delete(`/tasks/${id}`)
                .then(({ data }) => {
                    commit('deleteTask', data)
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
                .then(({ data }) => {
                    commit('deleteProject', data)
                })
        }
    }
}
