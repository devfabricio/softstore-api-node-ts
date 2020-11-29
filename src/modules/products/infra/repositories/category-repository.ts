import ICategoryRepository from './protocols/i-category-repository'
import Category, {
  ICategoryDocument,
  ICategoryResponse
} from '../schemas/category'
import { Model } from 'mongoose'

export default class CategoryRepository implements ICategoryRepository {
  private readonly repository: Model<ICategoryDocument>

  constructor () {
    this.repository = Category
  }

  async find (): Promise<ICategoryResponse[]> {
    return this.repository.find()
  }

  async create (name: string, slug: string): Promise<ICategoryResponse> {
    return await this.repository.create({ name, slug, productCounter: 0 })
  }

  async findById (id: string): Promise<ICategoryResponse> {
    return this.repository.findById(id)
  }

  async findByName (name: string): Promise<ICategoryResponse> {
    return this.repository.findOne({ name })
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async save (category: ICategoryResponse): Promise<ICategoryResponse> {
    return this.repository.updateOne({ _id: category._id },{ $set: { ...category } })
  }
}
