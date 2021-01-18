import AppError from '@shared/errors/app-error'
import ICategoryRepository
  from '@modules/products/infra/repositories/protocols/i-category-repository'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class UpdateCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository,
    private readonly textFormatter: ITextFormatter) {}

  public async execute (body: any): Promise<ICategoryResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, name } = body

    const category = await this.categoryRepository.findById(_id)
    if (!category) {
      throw new AppError('Category not found')
    }

    if (name !== category.name) {
      category.name = this.textFormatter.trim(name)
      category.slug = this.textFormatter.slugConverter(name)
    }

    return this.categoryRepository.save(category)
  }
}
