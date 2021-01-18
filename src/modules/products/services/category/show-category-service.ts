import AppError from '@shared/errors/app-error'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

export default class ShowCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository) {}

  public async execute (body: any): Promise<ICategoryResponse> {
    const { _id, slug } = body
    let category: ICategoryResponse
    if (_id) {
      category = await this.categoryRepository.findById(_id)
    }
    if (slug) {
      category = await this.categoryRepository.findBySlug(slug)
    }
    if (!category) {
      throw new AppError('Category not found')
    }
    return category
  }
}
