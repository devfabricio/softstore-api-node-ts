import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeAdministratorAuthenticationService } from '@modules/administrators/factories'

class AuthController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authentication = makeAdministratorAuthenticationService()
    const { administrator, token } = await authentication.execute({ email, password })
    delete administrator.password
    return response.json({ administrator, token })
  }
}

export default AuthController
