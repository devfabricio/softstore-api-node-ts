import { IProductPrimaryCategoryModel } from '@modules/products/infra/schemas/product-primary-category'

export default interface IProductPrimaryCategoryRepository {
  create(name: string, slug: string): Promise<IProductPrimaryCategoryModel>
  findById(id: string): Promise<IProductPrimaryCategoryModel>
  findByName(name: string): Promise<IProductPrimaryCategoryModel>
}
