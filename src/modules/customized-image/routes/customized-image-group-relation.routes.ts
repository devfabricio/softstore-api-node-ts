import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import CustomizedImageGroupRelationController from '@modules/customized-image/controllers/customized-image-group-relation-controller'

const customizedImageGroupRelationRouter = Router()
const customizedImageGroupRelationController = new CustomizedImageGroupRelationController()

customizedImageGroupRelationRouter.get('/', customizedImageGroupRelationController.index)
customizedImageGroupRelationRouter.get('/group/:groupId', customizedImageGroupRelationController.index)
customizedImageGroupRelationRouter.get('/:id', customizedImageGroupRelationController.show)
customizedImageGroupRelationRouter.delete('/:id', isAdminAuth, customizedImageGroupRelationController.delete)
customizedImageGroupRelationRouter.post('/', isAdminAuth, customizedImageGroupRelationController.create)
customizedImageGroupRelationRouter.put('/', isAdminAuth, customizedImageGroupRelationController.update)

export default customizedImageGroupRelationRouter
