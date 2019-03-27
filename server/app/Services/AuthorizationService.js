const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

class AuthorizathionService {
    verifyPermission(resource, user) {
        if (!resource) {
            throw new ResourceNotExistException()
        }

        if (resource.user_id !== user.id) {
            throw new InvalidAccessException()
        }
    }

    isExist(resource) {
        if (!resource) {
            throw new ResourceNotExistException()
        }
    }
}

module.exports = new AuthorizathionService()
