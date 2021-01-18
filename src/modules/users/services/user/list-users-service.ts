import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import { IResponseUserModel } from '@modules/users/infra/schemas/user'

export default class ListUsersService {
  constructor (
    private readonly userRepository: IUserRepository) {}

  public async execute (): Promise<IResponseUserModel[]> {
    return await this.userRepository.find()
  }
}
