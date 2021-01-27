import ICategoryRepository from './protocols/i-category-repository'
import Category, {
  ICategoryDocument, ICategoryModel,
  ICategoryResponse
} from '../schemas/category'
import { Model } from 'mongoose'

export default class CategoryRepository implements ICategoryRepository {
  private readonly repository: Model<ICategoryDocument>

  constructor () {
    this.repository = Category
  }

  async find (): Promise<ICategoryResponse[]> {
    return this.repository.find().populate({
      path: 'parent',
      populate: [{
        path: 'parent',
        populate: {
          path: 'parent',
          populate: {
            path: 'parent',
            populate: {
              path: 'parent',
              populate: {
                path: 'parent',
                populate: {
                  path: 'parent'
                }
              }
            }
          }
        }
      }]
    })
  }

  async create (data: ICategoryModel): Promise<ICategoryResponse> {
    return await this.repository.create(data)
  }

  async findById (id: string): Promise<ICategoryResponse> {
    return this.repository.findById(id)
  }

  async findBySlug (slug: string): Promise<ICategoryResponse> {
    return this.repository.findOne({ slug }).populate('category')
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
