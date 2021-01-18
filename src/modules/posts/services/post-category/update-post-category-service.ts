import AppError from '@shared/errors/app-error'
import IPostCategoryRepository
  from '@modules/posts/infra/repositories/protocols/i-post-category-repository'
import { IPostCategoryResponse } from '@modules/posts/infra/schemas/post-category'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class UpdatePostCategoryService {
  constructor (
    private readonly categoryRepository: IPostCategoryRepository,
    private readonly textFormatter: ITextFormatter) {}

  public async execute (body: any): Promise<IPostCategoryResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, name } = body

    const postCategory = await this.categoryRepository.findById(_id)
    if (!postCategory) {
      throw new AppError('Category not found')
    }

    if (name !== postCategory.name) {
      postCategory.name = this.textFormatter.trim(name)
      postCategory.slug = this.textFormatter.slugConverter(name)
    }

    return this.categoryRepository.save(postCategory)
  }
}
