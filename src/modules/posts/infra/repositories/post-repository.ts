import { Model } from 'mongoose'
import IPostRepository from '@modules/posts/infra/repositories/protocols/i-post-repository'
import Post, { IPostDocument, IPostModel, IPostResponse } from '@modules/posts/infra/schemas/post'

export default class PostRepository implements IPostRepository {
  private readonly repository: Model<IPostDocument>

  constructor () {
    this.repository = Post
  }

  async create (data: IPostModel): Promise<IPostResponse> {
    return await this.repository.create(data)
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }

  async find (): Promise<IPostResponse[]> {
    return this.repository.find()
  }

  async findById (id: string): Promise<IPostResponse> {
    return this.repository.findById(id)
  }

  async findBySlug (slug: string): Promise<IPostResponse> {
    return this.repository.findOne({ slug }).populate('postCategory')
  }

  async findByTitle (title: string): Promise<IPostResponse> {
    return this.repository.findOne({ title })
  }

  async save (data: IPostResponse): Promise<IPostResponse> {
    return this.repository.updateOne({ _id: data._id },{ $set: { ...data } })
  }
}
