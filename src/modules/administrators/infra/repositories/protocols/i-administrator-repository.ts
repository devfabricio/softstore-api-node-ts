import { IAdministratorModel, IResponseAdministratorModel } from '@modules/administrators/infra/schemas/administrator'

export default interface IAdministratorRepository {
  create(data: IAdministratorModel): Promise<IResponseAdministratorModel>
  findById(id: string): Promise<IResponseAdministratorModel>
  findByEmail(email: string): Promise<IResponseAdministratorModel>
  save(administrador: IResponseAdministratorModel): Promise<IResponseAdministratorModel>
}
