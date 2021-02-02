import UserSchema, { IResponseUserModel, IUserDocument, IUserModel } from '@modules/users/infra/schemas/user'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import { Model } from 'mongoose'

export class UserRepository implements IUserRepository {
  private readonly repository: Model<IUserDocument>

  constructor () {
    this.repository = UserSchema
  }

  async create ({ name, email, password, lastMessageReadAt }: IUserModel): Promise<IResponseUserModel> {
    return await this.repository.create({ name, email, password, lastMessageReadAt })
  }

  async find (): Promise<IResponseUserModel[]> {
    return this.repository.find()
  }

  async findByEmail (email: string): Promise<IResponseUserModel> {
    return this.repository.findOne({ email })
  }

  async findById (id: string): Promise<IResponseUserModel> {
    return this.repository.findById(id)
  }

  async save (user: IResponseUserModel): Promise<IResponseUserModel> {
    return this.repository.updateOne({ _id: user._id },{ $set: { ...user } })
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }
}
