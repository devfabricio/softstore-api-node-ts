import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { User } from '@modules/users/infra/typeorm/entities/user'
import AppError from '@shared/errors/app-error'
import IUserRepository from '@modules/users/protocols/user-repository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

@injectable()
export class AuthenticationService {
  constructor (
    @inject('UserRepository')
    private readonly usersRepository: IUserRepository) {}

  async execute ({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Invalid credentials', 401)
    }
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) {
      throw new AppError('Invalid credentials', 401)
    }

    const userId = user.id.toString()

    const token = sign({}, 'd2efc1f9e9409e902919b3dbe6ccbeaa', {
      subject: userId,
      expiresIn: '30d'
    })

    return { user, token }
  }
}
