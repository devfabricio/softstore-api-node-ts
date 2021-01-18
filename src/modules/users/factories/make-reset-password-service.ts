import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import ResetPasswordService from '@modules/users/services/authentication/reset-password-service'
import UserTokenRepository from '@modules/users/infra/repositories/user-token-repository'

export const makeResetPasswordService = (): ResetPasswordService => {
  const userRepository = new UserRepository()
  const bcryptAdater = new BcryptAdater()
  const userTokenRepository = new UserTokenRepository()
  return new ResetPasswordService(userRepository, bcryptAdater, userTokenRepository)
}
