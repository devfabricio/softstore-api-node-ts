import AppError from '@shared/errors/app-error'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'

export default class DeleteUserService {
  constructor (
    private readonly userRepository: IUserRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const user = await this.userRepository.findById(id)
    if (!user) {
      throw new AppError('Category not found')
    }

    return await this.userRepository.delete(id)
  }
}
