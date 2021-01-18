import { CreateUserService } from '@modules/users/services/user/create-user-service'
import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import { EmailValidatorAdapter } from '@shared/infra/adapters/email-validator-adapter'

export const makeCreateUserService = (): CreateUserService => {
  const userRepository = new UserRepository()
  const bcryptAdater = new BcryptAdater()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  return new CreateUserService(userRepository, bcryptAdater, emailValidatorAdapter)
}
