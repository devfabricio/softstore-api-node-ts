import ICategoryRepository
  from '@modules/products/infra/repositories/protocols/i-category-repository'
import { ICategoryModel } from '@modules/products/infra/schemas/category'

export default class ShowCategoryListService {
  constructor (
    private readonly categoryRepository: ICategoryRepository) {}

  public async execute (): Promise<ICategoryModel[]> {
    return await this.categoryRepository.find()
  }
}
