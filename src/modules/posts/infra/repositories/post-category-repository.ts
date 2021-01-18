import IPostCategoryRepository from './protocols/i-post-category-repository'
import PostCategory, {
  IPostCategoryDocument,
  IPostCategoryResponse
} from '../schemas/post-category'
import { Model } from 'mongoose'

export default class PostCategoryRepository implements IPostCategoryRepository {
  private readonly repository: Model<IPostCategoryDocument>

  constructor () {
    this.repository = PostCategory
  }

  async find (): Promise<IPostCategoryResponse[]> {
    return this.repository.find()
  }

  async create (name: string, slug: string): Promise<IPostCategoryResponse> {
    return await this.repository.create({ name, slug, postCounter: 0 })
  }

  async findById (id: string): Promise<IPostCategoryResponse> {
    return this.repository.findById(id)
  }

  async findBySlug (slug: string): Promise<IPostCategoryResponse> {
    return this.repository.findOne({ slug }).populate('category')
  }

  async findByName (name: string): Promise<IPostCategoryResponse> {
    return this.repository.findOne({ name })
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async save (category: IPostCategoryResponse): Promise<IPostCategoryResponse> {
    return this.repository.updateOne({ _id: category._id },{ $set: { ...category } })
  }
}
