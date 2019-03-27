'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthorizationService = use('App/Services/AuthorizationService')

class TaskController {
    async index({ auth, params, request }) {
        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)
        AuthorizationService.verifyPermission(project, user)
        return await project.tasks().fetch()
    }

    async create({ request, auth, params }) {
        const user = await auth.getUser() // get user
        const { name } = request.all() // get name of task
        const { id } = params // get project id
        const project = await Project.find(id) // find project 
        AuthorizationService.verifyPermission(project, user)
        const task = new Task()
        task.fill({
            name
        })
        await project.tasks().save(task)
        return task
    }

    async destroy({ auth, params, request }) {
        const user = await auth.getUser()
        const { id } = params
        const task = await Task.find(id)
        AuthorizationService.isExist(task)
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user)
        await task.delete()
        return task
    }

    async update({ auth, request, params }) {
        const user = await auth.getUser()
        const { id } = params
        const task = await Task.find(id)
        AuthorizationService.isExist(task)
        const project = await task.project().fetch()
        AuthorizationService.verifyPermission(project, user)
        task.merge(request.only([
            'name',
            'status'
        ]))
        await task.save()
        return task
    }
}

module.exports = TaskController
