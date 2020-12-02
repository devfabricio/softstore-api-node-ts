import { sign } from 'jsonwebtoken'
import { IResponseUserModel } from '@modules/users/infra/schemas/user'
import AppError from '@shared/errors/app-error'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import IAdministratorRepository from '@modules/administrators/infra/repositories/protocols/i-administrator-repository'

interface IResponse {
  administrator: IResponseUserModel
  token: string
}

export class AdministratorAuthenticationService {
  constructor (
    private readonly administratorRepository: IAdministratorRepository,
    private readonly bcryptAdapter: IBcryptAdapter) {}

  async execute (body: any): Promise<IResponse> {
    const requiredFields = ['email', 'password']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const administrator = await this.administratorRepository.findByEmail(body.email)
    if (!administrator) {
      throw new AppError('Invalid credentials', 401)
    }
    const passwordIsValid = await this.bcryptAdapter.compare(body.password, administrator.password)
    if (!passwordIsValid) {
      throw new AppError('Invalid credentials', 401)
    }

    const userId = administrator._id

    const token = sign({}, 'de755459c5a45e277d46d0f58809f98d', {
      subject: userId.toString(),
      expiresIn: '30d'
    })

    return { administrator, token }
  }
}
