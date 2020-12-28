import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import { AdministratorRepository } from '@modules/administrators/infra/repositories/administrator-repository'
import UpdateAdministratorProfileService from '@modules/administrators/services/update-administrator-profile-service'

export const makeUpdateAdministratorProfileService = (): UpdateAdministratorProfileService => {
  const administratorRepository = new AdministratorRepository()
  const bcryptAdater = new BcryptAdater()
  return new UpdateAdministratorProfileService(administratorRepository, bcryptAdater)
}
