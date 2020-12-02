import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateAdministratorService, makeShowAdministratorProfileService } from '@modules/administrators/factories'

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
}

export default AdministratorController
