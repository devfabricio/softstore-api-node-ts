import AppError from '@shared/errors/app-error'
import ICategoryRepository
  from '@modules/products/infra/repositories/protocols/i-category-repository'

export default class DeleteCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository) {}

  public async execute (id: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }
    return await this.categoryRepository.delete(id)
  }
}
