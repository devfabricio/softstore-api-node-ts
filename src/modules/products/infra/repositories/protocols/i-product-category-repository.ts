import { IProductCategoryModel, IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'

export default interface IProductCategoryRepository {
  create(data: IProductCategoryModel): Promise<IProductCategoryResponse>
  find(): Promise<IProductCategoryResponse[]>
  findByProduct(productId: string): Promise<IProductCategoryResponse[]>
  findById(id: string): Promise<IProductCategoryResponse>
  delete (id: string): Promise<boolean>
  deleteMany (productId: string): Promise<boolean>
  save (data: IProductCategoryModel): Promise<IProductCategoryResponse>
}
