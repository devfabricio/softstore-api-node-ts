import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'
import UpdateUserProfileService from '@modules/users/services/user/update-user-profile-service'

export const makeUpdateUserProfileService = (): UpdateUserProfileService => {
  const userRepository = new UserRepository()
  const bcryptAdater = new BcryptAdater()
  return new UpdateUserProfileService(userRepository, bcryptAdater)
}
