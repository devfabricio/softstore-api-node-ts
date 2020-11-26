import { IResponseUserToken } from '@modules/users/infra/schemas/user-token'

export default interface IUserTokenRepository {
  generate (user_id: string): Promise<IResponseUserToken>
  findByToken (token: string): Promise<IResponseUserToken>
}
