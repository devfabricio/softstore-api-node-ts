import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IController } from '@modules/users/protocols/i-controller'
import UpdateUserProfileService from '@modules/users/services/update-user-profile-service'
import ShowUserProfileService from '@modules/users/services/show-user-profile-service'

export default class ProfileController implements IController {
  async show (request: Request, response: Response): Promise<Response> {
    const showProfile = container.resolve(ShowUserProfileService)
    const user = await showProfile.execute(request.body)
    delete user.password
    return response.json(user)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const body = request.body
    const updateProfile = container.resolve(UpdateUserProfileService)

    const user = await updateProfile.execute(body)
    delete user.password
    return response.json(user)
  }
}
