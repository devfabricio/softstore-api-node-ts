import { inject, injectable } from 'tsyringe'
import IUserRepository from '@modules/users/protocols/i-user-repository'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import AppError from '@shared/errors/app-error'
import { User } from '@modules/users/infra/typeorm/entities/user'

@injectable()
export default class UpdateUserProfileService {
  constructor (@inject('UserRepository')
  private readonly usersRepository: IUserRepository,
  @inject('BcryptAdapter')
  private readonly bcryptAdapter: IBcryptAdapter) {}

  public async execute (body: any): Promise<User> {
    const requiredFields = ['userId']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { userId, name, email, password, oldPassword } = body

    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new AppError('User not found')
    }
    const userUpdatedEmail = await this.usersRepository.findByEmail(body.email)
    if (userUpdatedEmail && userUpdatedEmail.id.toString() !== body.userId) {
      throw new AppError('Email already in use')
    }

    user.name = name
    user.email = email

    if (password && !oldPassword) {
      throw new AppError('You need to inform the old password to set a new password')
    }

    if (password && oldPassword) {
      const checkOldPassword = await this.bcryptAdapter.compare(oldPassword, user.password)
      if (!checkOldPassword) {
        throw new AppError('Current password does not match')
      }
      user.password = await this.bcryptAdapter.hash(password)
    }
    return this.usersRepository.save(user)
  }
}
