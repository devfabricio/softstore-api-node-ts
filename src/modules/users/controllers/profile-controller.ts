import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeShowUserProfileService, makeUpdateUserProfileService } from '@modules/users/factories'

export default class ProfileController implements IController {
  async show (request: Request, response: Response): Promise<Response> {
    const showProfile = makeShowUserProfileService()
    const user = await showProfile.execute(request.body)
    delete user.password
    return response.json(user)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const body = request.body
    const updateProfile = makeUpdateUserProfileService()

    const user = await updateProfile.execute(body)
    delete user.password
    return response.json(user)
  }
}
