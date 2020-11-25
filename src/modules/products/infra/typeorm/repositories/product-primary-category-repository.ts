import IProductPrimaryCategoryRepository from '../../../protocols/i-product-primary-category-repository'
import { ProductPrimaryCategory } from '../entities/product-primary-category'
import { getRepository, Repository } from 'typeorm'
import { slugConverter } from '@shared/utils/slug-converter'

export default class ProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly ormRepository: Repository<ProductPrimaryCategory>

  constructor () {
    this.ormRepository = getRepository(ProductPrimaryCategory)
  }

  async create (category: string): Promise<ProductPrimaryCategory> {
    const slug = slugConverter(category)
    const productCategory = this.ormRepository.create({ category, slug })
    await this.ormRepository.save(productCategory)
    return productCategory
  }
}
