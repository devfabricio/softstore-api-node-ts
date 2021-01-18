import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import DefaultController from '@modules/default/controllers/default-controller'

const defaultRouter = Router()
const defaultController = new DefaultController()

defaultRouter.get('/', defaultController.index)
defaultRouter.get('/:id', defaultController.show)
defaultRouter.delete('/:id', defaultController.delete)
defaultRouter.post('/', isAdminAuth, defaultController.create)
defaultRouter.put('/', isAdminAuth, defaultController.update)

export default defaultRouter
