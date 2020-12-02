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
      const decoded = verify(token, authConfig.jwt.admin_secret)
      console.log(decoded)
      return { authenticated: true }
    } catch (error) {
      console.log(error)
      console.log(false)
      return { authenticated: false }
    }
  }
}

export default AdministratorVerifyTokenService
