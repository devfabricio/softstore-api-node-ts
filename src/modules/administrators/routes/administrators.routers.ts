import { Router } from 'express'
import AdministratorController from '../controllers/administrator-controller'

const administratorRouter = Router()
const administratorController = new AdministratorController()

administratorRouter.post('/', administratorController.create)
administratorRouter.get('/:id', administratorController.show)

export default administratorRouter
