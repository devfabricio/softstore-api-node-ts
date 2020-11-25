import IProductPrimaryCategoryRepository from '@modules/products/protocols/i-product-primary-category-repository'
import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'

export default class FakeProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly productPrimaryCategoryRepository: ProductPrimaryCategory[] = []

  async create (name: string, slug: string): Promise<ProductPrimaryCategory> {
    const productPrimaryCategory = new ProductPrimaryCategory()
    Object.assign(productPrimaryCategory, { id: 'any_category_id' }, { name }, { slug })
    this.productPrimaryCategoryRepository.push(productPrimaryCategory)
    return productPrimaryCategory
  }

  async findById (id: string): Promise<ProductPrimaryCategory> {
    return this.productPrimaryCategoryRepository.find(category => category.id.toString() === id)
  }

  async findByName (name: string): Promise<ProductPrimaryCategory> {
    return this.productPrimaryCategoryRepository.find(category => category.name === name)
  }
}
