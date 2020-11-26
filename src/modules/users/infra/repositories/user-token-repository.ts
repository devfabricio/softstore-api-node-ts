import IUserTokenRepository from '@modules/users/infra/repositories/protocols/i-user-token-repository'
import UserToken, { IResponseUserToken, IUserTokenDocument } from '@modules/users/infra/schemas/user-token'
import { uuid } from 'uuidv4'
import { Model } from 'mongoose'

export default class UserTokenRepository implements IUserTokenRepository {
  private readonly repository: Model<IUserTokenDocument>

  constructor () {
    this.repository = UserToken
  }

  async generate (user_id: string): Promise<IResponseUserToken> {
    return await this.repository.create({
      user: user_id,
      token: uuid()
    })
  }

  async findByToken (token: string): Promise<IResponseUserToken> {
    return this.repository.findOne({ token })
  }
}
