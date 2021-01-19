import { IProductSpecificationModel, IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'

export default interface IProductSpecificationRepository {
  create(data: IProductSpecificationModel): Promise<IProductSpecificationResponse>
  find(productId: string): Promise<IProductSpecificationResponse[]>
  findById(id: string): Promise<IProductSpecificationResponse>
  delete (id: string): Promise<boolean>
  save (data: IProductSpecificationModel): Promise<IProductSpecificationResponse>
}
