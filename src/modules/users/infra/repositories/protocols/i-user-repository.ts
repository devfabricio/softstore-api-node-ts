import { IResponseUserModel, IUserModel } from '@modules/users/infra/schemas/user'
import ICreateUserDTO from '@modules/users/dtos/i-create-user-dto'

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IResponseUserModel>
  findById(id: string): Promise<IResponseUserModel>
  findByEmail(email: string): Promise<IResponseUserModel>
  save(user: IUserModel): Promise<IResponseUserModel>
}
