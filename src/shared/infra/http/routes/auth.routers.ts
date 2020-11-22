import { Router } from 'express'
import AuthController from '@modules/users/presentation/auth-controller'

const authRouter = Router()
const authController = new AuthController()

authRouter.post('/', authController.create)

export default authRouter
