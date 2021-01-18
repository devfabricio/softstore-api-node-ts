import AppError from '@shared/errors/app-error'
import IPostRepository from '@modules/posts/infra/repositories/protocols/i-post-repository'
import { IPostResponse } from '@modules/posts/infra/schemas/post'

export default class ShowPostService {
  constructor (
    private readonly postRepository: IPostRepository) {}

  public async execute (body: any): Promise<IPostResponse> {
    const { _id, slug } = body
    let post: IPostResponse
    if (_id) {
      post = await this.postRepository.findById(_id)
    }
    if (slug) {
      post = await this.postRepository.findBySlug(slug)
    }
    if (!post) {
      throw new AppError('Post not found')
    }
    return post
  }
}
