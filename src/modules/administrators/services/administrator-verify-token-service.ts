import AppError from '@shared/errors/app-error'
import { verify } from 'jsonwebtoken'
import { authConfig } from '@config/auth'

interface IResponse {
  authenticated: boolean
}

class AdministratorVerifyTokenService {
  execute (body: any): IResponse {
    const requiredFields = ['token']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const { token } = body
    try {
      verify(token, authConfig.jwt.admin_secret)
      return { authenticated: true }
    } catch (error) {
      return { authenticated: false }
    }
  }
}

export default AdministratorVerifyTokenService
