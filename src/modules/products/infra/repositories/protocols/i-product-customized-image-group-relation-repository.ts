import { IProductCustomizedImageGroupRelationModel, IProductCustomizedImageGroupRelationResponse } from '@modules/products/infra/schemas/product-customized-image-group-relation'

export default interface IProductCustomizedImageGroupRelationRepository {
  create(data: IProductCustomizedImageGroupRelationModel): Promise<IProductCustomizedImageGroupRelationResponse>
  find(): Promise<IProductCustomizedImageGroupRelationResponse[]>
  findById(id: string): Promise<IProductCustomizedImageGroupRelationResponse>
  delete (id: string): Promise<boolean>
  save (data: IProductCustomizedImageGroupRelationModel): Promise<IProductCustomizedImageGroupRelationResponse>
}
