import IUserTokenRepository from '@modules/users/protocols/i-user-token-repository'
import UserToken from '@modules/users/infra/typeorm/entities/user-token'
import { getRepository, Repository } from 'typeorm'
import { uuid } from 'uuidv4'

export default class UserTokenRepository implements IUserTokenRepository {
  private readonly ormRepository: Repository<UserToken>

  constructor () {
    this.ormRepository = getRepository(UserToken)
  }

  async generate (user_id: string): Promise<UserToken> {
    const userToken = this.ormRepository.create({
      user_id,
      token: uuid()
    })
    await this.ormRepository.save(userToken)
    return userToken
  }

  async findByToken (token: string): Promise<UserToken> {
    return this.ormRepository.findOne({
      where: { token }
    })
  }
}
