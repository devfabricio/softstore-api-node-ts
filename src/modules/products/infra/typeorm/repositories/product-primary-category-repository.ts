import IProductPrimaryCategoryRepository from '../../../protocols/i-product-primary-category-repository'
import { ProductPrimaryCategory } from '../entities/product-primary-category'
import { getRepository, Repository } from 'typeorm'

export default class ProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly ormRepository: Repository<ProductPrimaryCategory>

  constructor () {
    this.ormRepository = getRepository(ProductPrimaryCategory)
  }

  async create (name: string, slug: string): Promise<ProductPrimaryCategory> {
    const productCategory = this.ormRepository.create({ name, slug })
    await this.ormRepository.save(productCategory)
    return productCategory
  }

  async findById (id: string): Promise<ProductPrimaryCategory> {
    return await this.ormRepository.findOne(id)
  }

  async findByName (name: string): Promise<ProductPrimaryCategory> {
    return await this.ormRepository.findOne({
      where: { name }
    })
  }
}
