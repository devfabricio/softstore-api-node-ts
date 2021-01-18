import { Model } from 'mongoose'
import IUserAddressRepository from '@modules/users/infra/repositories/protocols/i-user-address-repository'
import UserAddress, { IUserAddressDocument, IUserAddressModel, IUserAddressResponse } from '@modules/users/infra/schemas/user-address'

export default class UserAddressRepository implements IUserAddressRepository {
  private readonly repository: Model<IUserAddressDocument>

  constructor () {
    this.repository = UserAddress
  }

  async create (data: IUserAddressModel): Promise<IUserAddressResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IUserAddressResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IUserAddressResponse> {
    return this.repository.findById(id)
  }

  async findByUser (userId: string): Promise<IUserAddressResponse[]> {
    return this.repository.find({ user: userId })
  }

  async save (data: IUserAddressResponse): Promise<IUserAddressResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
