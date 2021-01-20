import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import CustomizedImageController from '@modules/customized-image/controllers/customized-image-controller'

const customizedImageRouter = Router()
const customizedImageController = new CustomizedImageController()

customizedImageRouter.get('/', customizedImageController.index)
customizedImageRouter.get('/:id', customizedImageController.show)
customizedImageRouter.delete('/:id', isAdminAuth, customizedImageController.delete)
customizedImageRouter.post('/', isAdminAuth, customizedImageController.create)

export default customizedImageRouter
