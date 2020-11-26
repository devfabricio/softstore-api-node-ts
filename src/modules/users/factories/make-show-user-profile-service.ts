import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import ShowUserProfileService from '@modules/users/services/show-user-profile-service'

export const makeShowUserProfileService = (): ShowUserProfileService => {
  const userRepository = new UserRepository()
  return new ShowUserProfileService(userRepository)
}
