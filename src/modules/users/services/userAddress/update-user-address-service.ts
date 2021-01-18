import AppError from '@shared/errors/app-error'
import IUserAddressRepository from '@modules/users/infra/repositories/protocols/i-user-address-repository'
import { IUserAddressResponse } from '@modules/users/infra/schemas/user-address'

export default class UpdateUserAddressService {
  constructor (
    private readonly userAddressRepository: IUserAddressRepository) {}

  public async execute (body: any): Promise<IUserAddressResponse> {
    const requiredFields = ['user', 'country', 'state', 'city', 'neighborhood', 'street', 'number', 'zipcode']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }

      return this.userAddressRepository.save(body)
    }
  }
}
