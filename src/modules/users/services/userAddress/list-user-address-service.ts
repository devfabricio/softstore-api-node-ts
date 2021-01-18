import IUserAddressRepository from '@modules/users/infra/repositories/protocols/i-user-address-repository'
import { IUserAddressResponse } from '@modules/users/infra/schemas/user-address'

export default class ListUserAddressService {
  constructor (
    private readonly userAddressRepository: IUserAddressRepository) {}

  public async execute (userId: string): Promise<IUserAddressResponse[]> {
    return await this.userAddressRepository.findByUser(userId)
  }
}
