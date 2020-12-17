import { IResponseUserModel, IUserModel } from '@modules/users/infra/schemas/user'

export default interface IUserRepository {
  create(data: IUserModel): Promise<IResponseUserModel>
  findById(id: string): Promise<IResponseUserModel>
  findByEmail(email: string): Promise<IResponseUserModel>
  save(user: IUserModel): Promise<IResponseUserModel>
}
