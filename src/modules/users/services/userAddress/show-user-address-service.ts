import AppError from '@shared/errors/app-error'
import IUserAddressRepository from '@modules/users/infra/repositories/protocols/i-user-address-repository'
import { IUserAddressResponse } from '@modules/users/infra/schemas/user-address'

export default class ShowUserAddressService {
  constructor (
    private readonly userAddressRepository: IUserAddressRepository) {}

  public async execute (id?: any): Promise<IUserAddressResponse> {
    if (!id) {
      throw new AppError('Missing param: id')
    }
    const userAddress = await this.userAddressRepository.findById(id)
    if (!userAddress) {
      throw new AppError('User Address not found')
    }
    return userAddress
  }
}
