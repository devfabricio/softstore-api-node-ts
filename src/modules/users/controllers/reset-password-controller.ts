import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeResetPasswordService } from '@modules/users/factories'

class ResetPasswordController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body
    const resetPasswordService = makeResetPasswordService()
    await resetPasswordService.execute({ token, password })
    return response.status(204).json()
  }
}

export default ResetPasswordController
