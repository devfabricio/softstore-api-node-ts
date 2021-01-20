import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import CustomizedImageGroupController from '@modules/customized-image/controllers/customized-image-group-controller'

const customizedImageGroupRouter = Router()
const customizedImageGroupController = new CustomizedImageGroupController()

customizedImageGroupRouter.get('/', customizedImageGroupController.index)
customizedImageGroupRouter.get('/:id', customizedImageGroupController.show)
customizedImageGroupRouter.delete('/:id', isAdminAuth, customizedImageGroupController.delete)
customizedImageGroupRouter.post('/', isAdminAuth, customizedImageGroupController.create)
customizedImageGroupRouter.put('/', isAdminAuth, customizedImageGroupController.update)

export default customizedImageGroupRouter
