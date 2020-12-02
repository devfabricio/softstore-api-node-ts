import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import { EmailValidatorAdapter } from '@shared/infra/adapters/email-validator-adapter'
import { AdministratorRepository } from '@modules/administrators/infra/repositories/administrator-repository'
import { CreateAdministratorService } from '@modules/administrators/services/create-administrator-service'

export const makeCreateAdministratorService = (): CreateAdministratorService => {
  const administratorRepository = new AdministratorRepository()
  const bcryptAdater = new BcryptAdater()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  return new CreateAdministratorService(administratorRepository, bcryptAdater, emailValidatorAdapter)
}
