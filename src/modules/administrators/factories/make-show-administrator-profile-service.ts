import { AdministratorRepository } from '@modules/administrators/infra/repositories/administrator-repository'
import ShowAdministratorProfileService from '@modules/administrators/services/show-administrator-profile-service'

export const makeShowAdministratorProfileService = (): ShowAdministratorProfileService => {
  const administratorRepository = new AdministratorRepository()
  return new ShowAdministratorProfileService(administratorRepository)
}
