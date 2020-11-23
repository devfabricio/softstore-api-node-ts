import UserToken from '@modules/users/infra/typeorm/entities/user-token'

export default interface IUserTokenRepository {
  generate (user_id: string): Promise<UserToken>
  findByToken (token: string): Promise<UserToken>
}
