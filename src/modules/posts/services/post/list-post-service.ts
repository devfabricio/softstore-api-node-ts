import IPostRepository from '@modules/posts/infra/repositories/protocols/i-post-repository'
import { IPostResponse } from '@modules/posts/infra/schemas/post'

export default class ListPostService {
  constructor (
    private readonly postRepository: IPostRepository) {}

  public async execute (): Promise<IPostResponse[]> {
    return await this.postRepository.find()
  }
}
