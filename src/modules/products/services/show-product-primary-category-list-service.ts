import IProductPrimaryCategoryRepository
  from '@modules/products/infra/repositories/protocols/i-product-primary-category-repository'
import { IProductPrimaryCategoryModel } from '@modules/products/infra/schemas/product-primary-category'

export default class ShowProductPrimaryCategoryListService {
  constructor (
    private readonly productPrimaryCategoryRepository: IProductPrimaryCategoryRepository) {}

  public async execute (): Promise<IProductPrimaryCategoryModel[]> {
    return await this.productPrimaryCategoryRepository.find()
  }
}
