import { EntityRepository, Repository } from 'typeorm'
import { User } from '../models/user'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findUser (): Promise<User> {
    return await this.findOne({
      where: { name: 'Fabrício' }
    })
  }
}
