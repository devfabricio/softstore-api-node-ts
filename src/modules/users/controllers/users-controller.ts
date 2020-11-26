import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateUserService } from '@modules/users/factories'

class UsersController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createUser = makeCreateUserService()
    const user = await createUser.execute({ name, email, password })
    delete user.password
    return response.json(user)
  }
}

export default UsersController
