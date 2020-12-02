import { Router } from 'express'
import AuthController from '@modules/administrators/controllers/auth-controller'
import VerifyTokenController from '@modules/administrators/controllers/verify-token-controller'

const authRouter = Router()
const authController = new AuthController()
const verifyTokenController = new VerifyTokenController()

authRouter.post('/auth', authController.create)
authRouter.post('/auth/verify', verifyTokenController.create)

export default authRouter
