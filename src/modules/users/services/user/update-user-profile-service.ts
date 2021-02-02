import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import AppError from '@shared/errors/app-error'
import { IUserModel } from '@modules/users/infra/schemas/user'

export default class UpdateUserProfileService {
  constructor (
    private readonly usersRepository: IUserRepository,
    private readonly bcryptAdapter: IBcryptAdapter) {}

  public async execute (body: any): Promise<IUserModel> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, name, email, password, oldPassword, lastMessageReadAt } = body

    const user = await this.usersRepository.findById(_id)
    if (!user) {
      throw new AppError('User not found')
    }

    if (!!email && email !== user.email) {
      const userUpdatedEmail = await this.usersRepository.findByEmail(body.email)
      if (userUpdatedEmail && userUpdatedEmail._id.toString() !== body.userId) {
        throw new AppError('Email already in use')
      }
      user.email = email
    }

    if (name !== user.name) {
      user.name = name
    }
    if (lastMessageReadAt !== user.lastMessageReadAt) {
      user.lastMessageReadAt = lastMessageReadAt
    }

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
