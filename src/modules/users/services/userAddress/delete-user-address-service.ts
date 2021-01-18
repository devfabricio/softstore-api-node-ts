import AppError from '@shared/errors/app-error'
import IUserAddressRepository from '@modules/users/infra/repositories/protocols/i-user-address-repository'

export default class DeleteUserAddressService {
  constructor (
    private readonly userAddressRepository: IUserAddressRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const userAddress = await this.userAddressRepository.findById(id)
    if (!userAddress) {
      throw new AppError('User Address not found')
    }

    return await this.userAddressRepository.delete(id)
  }
}
