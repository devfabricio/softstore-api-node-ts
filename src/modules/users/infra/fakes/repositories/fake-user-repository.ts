import IUserRepository from '@modules/users/protocols/i-user-repository'
import { User } from '@modules/users/infra/typeorm/entities/user'
import ICreateUserDTO from '@modules/users/dtos/i-create-user-dto'

export class FakeUserRepository implements IUserRepository {
  private readonly users: User[] = []

  public async create (userData: ICreateUserDTO): Promise<User> {
    const user = new User()
    Object.assign(user, { id: 'any_id' }, userData)
    this.users.push(user)
    return user
  }

  public async findByEmail (email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  async findById (id: string): Promise<User> {
    return this.users.find(user => user.id.toString() === id)
  }

  async save (user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id)
    this.users[findIndex] = user
    return user
  }
}
