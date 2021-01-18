import AppError from '@shared/errors/app-error'
import IUserAddressRepository from '@modules/users/infra/repositories/protocols/i-user-address-repository'
import { IUserAddressResponse } from '@modules/users/infra/schemas/user-address'

export default class CreateUserAddressService {
  constructor (
    private readonly userAddressRepository: IUserAddressRepository) {
  }

  async execute (body: any): Promise<IUserAddressResponse> {
    const requiredFields = ['user', 'country', 'state', 'city', 'neighborhood', 'street', 'number', 'zipcode']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    return await this.userAddressRepository.create(body)
  }
}
