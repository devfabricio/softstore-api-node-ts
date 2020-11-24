import { inject, injectable } from 'tsyringe'
import IUserRepository from '@modules/users/protocols/i-user-repository'
import { User } from '@modules/users/infra/typeorm/entities/user'
import AppError from '@shared/errors/app-error'

@injectable()
export default class ShowUserProfileService {
  constructor (@inject('UserRepository')
  private readonly usersRepository: IUserRepository) {}

  public async execute (body: any): Promise<User> {
    const { userId } = body
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new AppError('User not found')
    }
    return user
  }
}
