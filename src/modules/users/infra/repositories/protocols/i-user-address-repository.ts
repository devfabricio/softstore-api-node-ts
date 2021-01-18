import { IUserAddressModel, IUserAddressResponse } from '@modules/users/infra/schemas/user-address'

export default interface IUserAddressRepository {
  create(data: IUserAddressModel): Promise<IUserAddressResponse>
  find(): Promise<IUserAddressResponse[]>
  findByUser(userId: string): Promise<IUserAddressResponse[]>
  findById(id: string): Promise<IUserAddressResponse>
  delete (id: string): Promise<boolean>
  save (data: IUserAddressModel): Promise<IUserAddressResponse>
}
