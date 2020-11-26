import UserSchema, { IUserDocument, IUserModel } from '@modules/users/infra/schemas/user'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import ICreateUserDTO from '@modules/users/dtos/i-create-user-dto'
import { Model } from 'mongoose'

export class UserRepository implements IUserRepository {
  private readonly repository: Model<IUserDocument>

  constructor () {
    this.repository = UserSchema
  }

  async create ({ name, email, password }: ICreateUserDTO): Promise<IUserModel> {
    return await this.repository.create({ name, email, password })
  }

  async findByEmail (email: string): Promise<IUserModel> {
    return this.repository.findOne({ email })
  }

  async findById (id: string): Promise<IUserModel> {
    return this.repository.findById(id)
  }

  async save (user: IUserModel): Promise<IUserModel> {
    return this.repository.updateOne({ _id: '' },{ $set: { ...user } })
  }
}
