import { IController } from '@modules/users/protocols/i-controller'
import SendForgotPasswordEmailService from '@modules/users/services/send-forgot-password-email-service'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class ForgotPasswordController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    const resetPasswordService = container.resolve(SendForgotPasswordEmailService)
    await resetPasswordService.execute({ email })
    return response.status(204).json()
  }
}

export default ForgotPasswordController
