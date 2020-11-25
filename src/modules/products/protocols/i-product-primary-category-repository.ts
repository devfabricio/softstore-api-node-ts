import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'

export default interface IProductPrimaryCategoryRepository {
  create(category: string): Promise<ProductPrimaryCategory>
}
