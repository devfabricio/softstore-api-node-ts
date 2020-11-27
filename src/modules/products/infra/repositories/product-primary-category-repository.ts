import IProductPrimaryCategoryRepository from './protocols/i-product-primary-category-repository'
import ProductPrimaryCategory, {
  IProductPrimaryCategoryDocument,
  IResponseProductPrimaryCategoryModel
} from '../schemas/product-primary-category'
import { Model } from 'mongoose'

export default class ProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly repository: Model<IProductPrimaryCategoryDocument>

  constructor () {
    this.repository = ProductPrimaryCategory
  }

  async find (): Promise<IResponseProductPrimaryCategoryModel[]> {
    return this.repository.find()
  }

  async create (name: string, slug: string): Promise<IResponseProductPrimaryCategoryModel> {
    return await this.repository.create({ name, slug })
  }

  async findById (id: string): Promise<IResponseProductPrimaryCategoryModel> {
    return this.repository.findById(id)
  }

  async findByName (name: string): Promise<IResponseProductPrimaryCategoryModel> {
    return this.repository.findOne({ name })
  }
}
