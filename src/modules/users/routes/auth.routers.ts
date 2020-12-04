import { Router } from 'express'
import AuthController from '@modules/users/controllers/auth-controller'
import VerifyTokenController from '@modules/users/controllers/verify-token-controller'

const authRouter = Router()
const authController = new AuthController()
const verifyTokenController = new VerifyTokenController()

authRouter.post('/', authController.create)
authRouter.post('/verify', verifyTokenController.create)
export default authRouter
