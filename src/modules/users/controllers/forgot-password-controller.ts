import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeSendForgotPasswordEmailService } from '@modules/users/factories'

class ForgotPasswordController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    const resetPasswordService = makeSendForgotPasswordEmailService()
    await resetPasswordService.execute({ email })
    return response.status(204).json()
  }
}

export default ForgotPasswordController
