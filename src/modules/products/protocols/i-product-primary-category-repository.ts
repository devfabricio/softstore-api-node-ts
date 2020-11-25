import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'

export default interface IProductPrimaryCategoryRepository {
  create(name: string, slug: string): Promise<ProductPrimaryCategory>
  findById(id: string): Promise<ProductPrimaryCategory>
  findByName(name: string): Promise<ProductPrimaryCategory>
}
