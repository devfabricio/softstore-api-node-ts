import AppError from '@shared/errors/app-error'
import IPostRepository from '@modules/posts/infra/repositories/protocols/i-post-repository'

export default class DeletePostService {
  constructor (
    private readonly postRepository: IPostRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const post = await this.postRepository.findById(id)
    if (!post) {
      throw new AppError('Post not found')
    }

    return await this.postRepository.delete(id)
  }
}
