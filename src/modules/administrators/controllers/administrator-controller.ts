import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateAdministratorService, makeShowAdministratorProfileService } from '@modules/administrators/factories'
import { makeUpdateAdministratorProfileService } from '@modules/administrators/factories/make-update-administrator-profile-service'

class AdministratorController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createAdministrator = makeCreateAdministratorService()
    const administrator = await createAdministrator.execute({ name, email, password })
    delete administrator.password
    return response.json(administrator)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const showAdministrator = makeShowAdministratorProfileService()
    const administrator = await showAdministrator.execute(id)
    delete administrator.password
    return response.json(administrator)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const body = request.body
    const updateAdministrator = makeUpdateAdministratorProfileService()
    const administrator = await updateAdministrator.execute(body)
    delete administrator.password
    return response.json(administrator)
  }
}

export default AdministratorController
