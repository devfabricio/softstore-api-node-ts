import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import AdministratorVerifyTokenService from '@modules/administrators/services/administrator-verify-token-service'

class VerifyTokenController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const verifyToken = new AdministratorVerifyTokenService()
    const { authenticated } = await verifyToken.execute(request.body)
    return response.json({ authenticated })
  }
}

export default VerifyTokenController
