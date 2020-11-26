import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import { IUserModel } from '@modules/users/infra/schemas/user'
import AppError from '@shared/errors/app-error'

export default class ShowUserProfileService {
  constructor (
    private readonly usersRepository: IUserRepository) {}

  public async execute (body: any): Promise<IUserModel> {
    const { userId } = body
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new AppError('User not found')
    }
    return user
  }
}
