import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import { IResponseUserModel, IUserModel } from '@modules/users/infra/schemas/user'

export class FakeUserRepository implements IUserRepository {
  private readonly users: IResponseUserModel[] = []

  public async create (userData: IUserModel): Promise<IResponseUserModel> {
    const user = { _id: 'any_id', ...userData }
    this.users.push(user)
    return user
  }

  public async findByEmail (email: string): Promise<IResponseUserModel> {
    return this.users.find(user => user.email === email)
  }

  async findById (id: string): Promise<IResponseUserModel> {
    return this.users.find(user => user._id.toString() === id)
  }

  async save (user: IResponseUserModel): Promise<IResponseUserModel> {
    const findIndex = this.users.findIndex(findUser => findUser._id === user._id)
    this.users[findIndex] = user
    return user
  }

  async delete (id: string): Promise<boolean> {
    await this.users.filter(user => user._id !== id)
    return false
  }

  async find (): Promise<IResponseUserModel[]> {
    return this.users
  }
}
