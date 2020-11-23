import IUserTokenRepository from '@modules/users/protocols/i-user-token-repository'
import UserToken from '@modules/users/infra/typeorm/entities/user-token'
import { uuid } from 'uuidv4'

export default class FakeUserTokenRepository implements IUserTokenRepository {
  private readonly userTokens: UserToken[] = []
  async generate (user_id: string): Promise<UserToken> {
    const userToken = new UserToken()
    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id
    })
    this.userTokens.push(userToken)
    return userToken
  }

  async findByToken (token: string): Promise<UserToken> {
    return this.userTokens.find(userToken => userToken.token === token)
  }
}
