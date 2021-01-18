import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import { AuthenticationService } from '@modules/users/services/authentication/authentication-service'

export const makeAuthenticationService = (): AuthenticationService => {
  const userRepository = new UserRepository()
  const bcryptAdater = new BcryptAdater()
  return new AuthenticationService(userRepository, bcryptAdater)
}
