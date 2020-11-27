import { sign } from 'jsonwebtoken'
import { IResponseUserModel } from '@modules/users/infra/schemas/user'
import AppError from '@shared/errors/app-error'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'

interface IResponse {
  user: IResponseUserModel
  token: string
}

export class AuthenticationService {
  constructor (
    private readonly usersRepository: IUserRepository,
    private readonly bcryptAdapter: IBcryptAdapter) {}

  async execute (body: any): Promise<IResponse> {
    const requiredFields = ['email', 'password']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const user = await this.usersRepository.findByEmail(body.email)
    if (!user) {
      throw new AppError('Invalid credentials', 401)
    }
    const passwordIsValid = await this.bcryptAdapter.compare(body.password, user.password)
    if (!passwordIsValid) {
      throw new AppError('Invalid credentials', 401)
    }

    const userId = user._id

    const token = sign({}, 'd2efc1f9e9409e902919b3dbe6ccbeaa', {
      subject: userId.toString(),
      expiresIn: '30d'
    })

    return { user, token }
  }
}
