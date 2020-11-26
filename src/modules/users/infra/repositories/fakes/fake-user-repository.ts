import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import { IResponseUserModel, IUserModel } from '@modules/users/infra/schemas/user'
import ICreateUserDTO from '@modules/users/dtos/i-create-user-dto'

export class FakeUserRepository implements IUserRepository {
  private readonly users: IResponseUserModel[] = []

  public async create (userData: ICreateUserDTO): Promise<IResponseUserModel> {
    const user = { _id: 'any_id', ...userData }
    this.users.push(user)
    return user
  }

  public async findByEmail (email: string): Promise<IResponseUserModel> {
    return this.users.find(user => user.email === email)
  }

  async findById (id: string): Promise<IUserModel> {
    return this.users.find(user => user._id.toString() === id)
  }

  async save (user: IResponseUserModel): Promise<IResponseUserModel> {
    const findIndex = this.users.findIndex(findUser => findUser._id === user._id)
    this.users[findIndex] = user
    return user
  }
}
