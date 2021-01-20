import { ICustomizedImageGroupRelationModel, ICustomizedImageGroupRelationResponse } from '@modules/customized-image/infra/schemas/customized-image-group-relation'

export default interface ICustomizedImageGroupRelationRepository {
  create(data: ICustomizedImageGroupRelationModel): Promise<ICustomizedImageGroupRelationResponse>
  find(): Promise<ICustomizedImageGroupRelationResponse[]>
  findByGroup (group: string): Promise<ICustomizedImageGroupRelationResponse[]>
  findById(id: string): Promise<ICustomizedImageGroupRelationResponse>
  delete (id: string): Promise<boolean>
  save (data: ICustomizedImageGroupRelationModel): Promise<ICustomizedImageGroupRelationResponse>
}
