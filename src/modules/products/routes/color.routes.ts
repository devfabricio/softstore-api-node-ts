import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import ColorController from '@modules/products/controllers/color-controller'

const colorRouter = Router()
const colorController = new ColorController()

colorRouter.get('/', colorController.index)
colorRouter.get('/:id', colorController.show)
colorRouter.delete('/:id', isAdminAuth, colorController.delete)
colorRouter.post('/', isAdminAuth, colorController.create)
colorRouter.put('/', isAdminAuth, colorController.update)

export default colorRouter
