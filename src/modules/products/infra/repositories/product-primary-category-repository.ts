import IProductPrimaryCategoryRepository from './protocols/i-product-primary-category-repository'
import ProductPrimaryCategory, {
  IProductPrimaryCategoryDocument,
  IProductPrimaryCategoryModel
} from '../schemas/product-primary-category'
import { Model } from 'mongoose'

export default class ProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly repository: Model<IProductPrimaryCategoryDocument>

  constructor () {
    this.repository = ProductPrimaryCategory
  }

  async create (name: string, slug: string): Promise<IProductPrimaryCategoryModel> {
    return await this.repository.create({ name, slug })
  }

  async findById (id: string): Promise<IProductPrimaryCategoryModel> {
    return this.repository.findById(id)
  }

  async findByName (name: string): Promise<IProductPrimaryCategoryModel> {
    return this.repository.findOne({ name })
  }
}
