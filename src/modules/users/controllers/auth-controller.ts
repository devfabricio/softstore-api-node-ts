import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeAuthenticationService } from '@modules/users/factories'

class AuthController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authentication = makeAuthenticationService()
    const { user, token } = await authentication.execute({ email, password })
    delete user.password
    return response.json({ user, token })
  }
}

export default AuthController
