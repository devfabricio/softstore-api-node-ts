import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserService } from '@modules/users/services/create-user-service'
import { IController } from '@modules/users/protocols/controller'

class UsersController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createUser = container.resolve(CreateUserService)
    const user = await createUser.execute({ name, email, password })
    delete user.password
    return response.json(user)
  }
}

export default UsersController
