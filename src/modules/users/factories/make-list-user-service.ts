import { UserRepository } from '@modules/users/infra/repositories/user-repository'
import ListUsersService from '@modules/users/services/user/list-users-service'

export const makeListUserService = (): ListUsersService => {
  const userRepository = new UserRepository()
  return new ListUsersService(userRepository)
}
