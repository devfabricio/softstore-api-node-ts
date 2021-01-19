import { IProductPhotoModel, IProductPhotoResponse } from '@modules/products/infra/schemas/product-photo'

export default interface IProductPhotoRepository {
  create(data: IProductPhotoModel): Promise<IProductPhotoResponse>
  find(): Promise<IProductPhotoResponse[]>
  findByProduct(productId: string): Promise<IProductPhotoResponse[]>
  findById(id: string): Promise<IProductPhotoResponse>
  delete (id: string): Promise<boolean>
  save (data: IProductPhotoModel): Promise<IProductPhotoResponse>
}
