import { User } from '@modules/users/infra/typeorm/entities/user'
import ICreateUserDTO from '@modules/users/dtos/i-create-user-dto'

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<User>
}
