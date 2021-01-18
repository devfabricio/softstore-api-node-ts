import { IDefaultModel, IDefaultResponse } from '@modules/default/infra/schemas/default'

export default interface IDefaultRepository {
  create(data: IDefaultModel): Promise<IDefaultResponse>
  find(): Promise<IDefaultResponse[]>
  findById(id: string): Promise<IDefaultResponse>
  delete (id: string): Promise<boolean>
  save (data: IDefaultModel): Promise<IDefaultResponse>
}
