import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import { AdministratorAuthenticationService } from '@modules/administrators/services/administrator-authentication-service'
import { AdministratorRepository } from '@modules/administrators/infra/repositories/administrator-repository'

export const makeAdministratorAuthenticationService = (): AdministratorAuthenticationService => {
  const administratorRepository = new AdministratorRepository()
  const bcryptAdater = new BcryptAdater()
  return new AdministratorAuthenticationService(administratorRepository, bcryptAdater)
}
