import AppError from '@shared/errors/app-error'
import { IPostModel, IPostResponse } from '@modules/posts/infra/schemas/post'
import IPostRepository from '@modules/posts/infra/repositories/protocols/i-post-repository'
import IPostCategoryRepository from '@modules/posts/infra/repositories/protocols/i-post-category-repository'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class CreatePostService {
  constructor (
    private readonly postRepository: IPostRepository,
    private readonly postCategoryRepository: IPostCategoryRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<IPostResponse> {
    const requiredFields = ['title', 'text', 'status', 'postCategory', 'coverImg']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const {
      title, text, status, postCategory, coverImg
    } = body

    const postTitle = this.textFormatter.trim(title)

    const checkIfPostTitleExists = await this.postRepository.findByTitle(postTitle)
    if (checkIfPostTitleExists) {
      throw new AppError('A post with title name already exists')
    }

    const checkIfPostCategoryExists = await this.postCategoryRepository.findById(postCategory)
    if (!checkIfPostCategoryExists) {
      throw new AppError('Invalid category')
    }

    const slug = this.textFormatter.slugConverter(postTitle)
    const postData: IPostModel = { title: postTitle, text, status, postCategory, slug, coverImg }

    return await this.postRepository.create(postData)
  }
}
