import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import DeleteUserService from '@modules/users/services/user/delete-user-service'

export const makeDeleteUserService = (): DeleteUserService => {
  const userRepository = new UserRepository()
  return new DeleteUserService(userRepository)
}
