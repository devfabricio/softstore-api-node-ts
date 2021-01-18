import AppError from '@shared/errors/app-error'
import { IPostResponse } from '@modules/posts/infra/schemas/post'
import IPostRepository from '@modules/posts/infra/repositories/protocols/i-post-repository'
import IPostCategoryRepository from '@modules/posts/infra/repositories/protocols/i-post-category-repository'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class UpdatePostService {
  constructor (
    private readonly postRepository: IPostRepository,
    private readonly postCategoryRepository: IPostCategoryRepository,
    private readonly textFormatter: ITextFormatter) {}

  public async execute (body: any): Promise<IPostResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const { _id, title, text, status, postCategory, coverImg } = body

    const post = await this.postRepository.findById(_id)
    if (!post) {
      throw new AppError('Post not found')
    }

    if (title !== post.title) {
      const postTitle = this.textFormatter.trim(title)

      const checkIfPostTitleExists = await this.postRepository.findByTitle(postTitle)
      if (checkIfPostTitleExists) {
        throw new AppError('A post with title name already exists')
      }

      const slug = this.textFormatter.slugConverter(postTitle)
      post.title = postTitle
      post.slug = slug
    }

    if (postCategory !== post.postCategory) {
      const checkIfCategoryExists = await this.postCategoryRepository.findById(postCategory)
      if (!checkIfCategoryExists) {
        throw new AppError('Invalid post category')
      }
      post.postCategory = postCategory
    }

    post.text = text
    post.status = status
    post.coverImg = coverImg

    return this.postRepository.save(post)
  }
}
