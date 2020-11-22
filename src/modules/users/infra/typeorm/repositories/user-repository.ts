import { getRepository, Repository } from 'typeorm'
import { User } from '@modules/users/infra/typeorm/entities/user'
import IUserRepository from '@modules/users/protocols/user-repository'
import ICreateUserDTO from '@modules/users/dtos/i-create-user-dto'

export class UserRepository implements IUserRepository {
  private readonly ormRepository: Repository<User>

  constructor () {
    this.ormRepository = getRepository(User)
  }

  public async create ({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, email, password })
    await this.ormRepository.save(user)
    return user
  }

  public async findByEmail (email: string): Promise<User> {
    return await this.ormRepository.findOne({
      where: { email }
    })
  }
}
