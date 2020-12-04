import AppError from '@shared/errors/app-error'
import { verify } from 'jsonwebtoken'
import { authConfig } from '@config/auth'

interface IResponse {
  authenticated: boolean
  userId?: string
}

class VerifyTokenService {
  execute (body: any): IResponse {
    const requiredFields = ['token']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const { token } = body
    try {
      const decodedToken: any = verify(token, authConfig.jwt.user_secret)
      return { authenticated: true, userId: decodedToken.uid }
    } catch (error) {
      console.log(error)
      return { authenticated: false }
    }
  }
}

export default VerifyTokenService
