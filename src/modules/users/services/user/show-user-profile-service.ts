import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import { IUserModel } from '@modules/users/infra/schemas/user'
import AppError from '@shared/errors/app-error'

export default class ShowUserProfileService {
  constructor (
    private readonly usersRepository: IUserRepository) {}

  public async execute (id?: any): Promise<IUserModel> {
    if (!id) {
      throw new AppError('Missing param: id')
    }
    const user = await this.usersRepository.findById(id)
    if (!user) {
      throw new AppError('User not found')
    }
    return user
  }
}
