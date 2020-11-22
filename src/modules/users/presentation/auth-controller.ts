import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticationService } from '@modules/users/services/authentication-service'
import { IController } from '@modules/users/protocols/controller'

class AuthController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authentication = container.resolve(AuthenticationService)
    const { user, token } = await authentication.execute({ email, password })
    delete user.password
    return response.json({ user, token })
  }
}

export default AuthController
