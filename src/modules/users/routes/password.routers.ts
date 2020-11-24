import { Router } from 'express'
import ForgotPasswordController from '@modules/users/controllers/forgot-password-controller'
import ResetPasswordController from '@modules/users/controllers/reset-password-controller'

const passwordRouter = Router()
const forgotPasswordController = new ForgotPasswordController()
const resetPasswordController = new ResetPasswordController()

passwordRouter.post('/forgot', forgotPasswordController.create)
passwordRouter.post('/reset', resetPasswordController.create)

export default passwordRouter
