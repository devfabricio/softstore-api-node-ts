import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'
import { IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'

export default class ListProductCategoryService {
  constructor (
    private readonly productCategoryRepository: IProductCategoryRepository) {}

  public async execute (body: any): Promise<IProductCategoryResponse[]> {
    const { productId } = body
    if (productId) {
      return await this.productCategoryRepository.findByProduct(productId)
    }
    return await this.productCategoryRepository.find()
  }
}
