import IUserRepository from '@modules/users/protocols/user-repository'
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
}
