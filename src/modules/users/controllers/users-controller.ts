import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateUserService, makeDeleteUserService, makeListUserService } from '@modules/users/factories'

class UsersController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listUserService = makeListUserService()
    const userList = await listUserService.execute()
    return response.status(200).json(userList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createUser = makeCreateUserService()
    const user = await createUser.execute({ name, email, password })
    delete user.password
    return response.json(user)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteUserService = makeDeleteUserService()
    await deleteUserService.execute(id)
    return response.status(204).json()
  }
}

export default UsersController
