import IUserTokenRepository from '@modules/users/infra/repositories/protocols/i-user-token-repository'
import { IResponseUserToken } from '@modules/users/infra/schemas/user-token'
import { uuid } from 'uuidv4'

export default class FakeUserTokenRepository implements IUserTokenRepository {
  private readonly userTokens: IResponseUserToken[] = []

  async generate (user_id: string): Promise<IResponseUserToken> {
    const userToken: IResponseUserToken = {
      _id: uuid(),
      token: uuid(),
      user: user_id
    }
    this.userTokens.push(userToken)
    return userToken
  }

  async findByToken (token: string): Promise<IResponseUserToken> {
    return this.userTokens.find(userToken => userToken.token === token)
  }
}
