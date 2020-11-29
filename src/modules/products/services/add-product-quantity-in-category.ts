import { ICategoryResponse } from '@modules/products/infra/schemas/category'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import AppError from '@shared/errors/app-error'

export default class AddProductQuantityInCategory {
  constructor (
    private readonly categoryRepository: ICategoryRepository) {}

  public async execute (body: any): Promise<ICategoryResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id } = body

    const category = await this.categoryRepository.findById(_id)
    if (!category) {
      throw new AppError('Category not found')
    }
    category.productCounter += 1
    return this.categoryRepository.save(category)
  }
}
