import { IResponseProductPrimaryCategoryModel } from '@modules/products/infra/schemas/product-primary-category'

export default interface IProductPrimaryCategoryRepository {
  find(): Promise<IResponseProductPrimaryCategoryModel[]>
  create(name: string, slug: string): Promise<IResponseProductPrimaryCategoryModel>
  findById(id: string): Promise<IResponseProductPrimaryCategoryModel>
  findByName(name: string): Promise<IResponseProductPrimaryCategoryModel>
}
