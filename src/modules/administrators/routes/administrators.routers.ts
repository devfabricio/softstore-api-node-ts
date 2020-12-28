import { Router } from 'express'
import AdministratorController from '../controllers/administrator-controller'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'

const administratorRouter = Router()
const administratorController = new AdministratorController()

administratorRouter.post('/', administratorController.create)
administratorRouter.put('/', isAdminAuth, administratorController.update)
administratorRouter.get('/:id', administratorController.show)

export default administratorRouter
