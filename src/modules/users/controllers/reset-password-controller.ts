import { IController } from '@modules/users/protocols/i-controller'
import ResetPasswordService from '@modules/users/services/reset-password-service'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

class ResetPasswordController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    const resetPasswordService = container.resolve(ResetPasswordService)
    await resetPasswordService.execute({ email })
    return response.status(204).json()
  }
}

export default ResetPasswordController
