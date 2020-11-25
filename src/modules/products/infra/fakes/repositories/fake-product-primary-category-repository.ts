import IProductPrimaryCategoryRepository from '@modules/products/protocols/i-product-primary-category-repository'
import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'

export default class FakeProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly productPrimaryCategoryRepository: ProductPrimaryCategory[] = []

  async create (category: string): Promise<ProductPrimaryCategory> {
    const productPrimaryCategory = new ProductPrimaryCategory()
    Object.assign(productPrimaryCategory, { id: 'any_id' }, { category })
    this.productPrimaryCategoryRepository.push(productPrimaryCategory)
    return productPrimaryCategory
  }
}
