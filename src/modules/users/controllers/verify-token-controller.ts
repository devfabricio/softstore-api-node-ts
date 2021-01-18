import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import VerifyTokenService from '@modules/users/services/authentication/verify-token-service'

class VerifyTokenController implements IController {
  public async create (request: Request, response: Response): Promise<Response> {
    const verifyToken = new VerifyTokenService()
    const { authenticated, userId } = await verifyToken.execute(request.body)
    return response.json({ authenticated, userId })
  }
}

export default VerifyTokenController
