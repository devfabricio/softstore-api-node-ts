import { ICustomizedImageGroupModel, ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'

export default interface ICustomizedImageGroupRepository {
  create(data: ICustomizedImageGroupModel): Promise<ICustomizedImageGroupResponse>
  find(): Promise<ICustomizedImageGroupResponse[]>
  findById(id: string): Promise<ICustomizedImageGroupResponse>
  delete (id: string): Promise<boolean>
  save (data: ICustomizedImageGroupModel): Promise<ICustomizedImageGroupResponse>
}
