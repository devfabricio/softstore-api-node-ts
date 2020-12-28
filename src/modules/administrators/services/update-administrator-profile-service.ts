import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import AppError from '@shared/errors/app-error'
import IAdministratorRepository from '@modules/administrators/infra/repositories/protocols/i-administrator-repository'
import { IAdministratorModel } from '@modules/administrators/infra/schemas/administrator'

export default class UpdateAdministratorProfileService {
  constructor (
    private readonly administratorRepository: IAdministratorRepository,
    private readonly bcryptAdapter: IBcryptAdapter) {}

  public async execute (body: any): Promise<IAdministratorModel> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, name, email, profileImg, password, oldPassword } = body

    const administrator = await this.administratorRepository.findById(_id)
    if (!administrator) {
      throw new AppError('User not found')
    }

    if (!!email && email !== administrator.email) {
      const userUpdatedEmail = await this.administratorRepository.findByEmail(body.email)
      if (userUpdatedEmail && userUpdatedEmail._id.toString() !== body.userId) {
        throw new AppError('Email already in use')
      }
      administrator.email = email
    }

    if (name !== administrator.name) {
      administrator.name = name
    }

    if (profileImg !== administrator.profileImg) {
      administrator.profileImg = profileImg
    }

    if (password && !oldPassword) {
      throw new AppError('You need to inform the old password to set a new password')
    }

    if (password && oldPassword) {
      const checkOldPassword = await this.bcryptAdapter.compare(oldPassword, administrator.password)
      if (!checkOldPassword) {
        throw new AppError('Current password does not match')
      }
      administrator.password = await this.bcryptAdapter.hash(password)
    }
    return this.administratorRepository.save(administrator)
  }
}
