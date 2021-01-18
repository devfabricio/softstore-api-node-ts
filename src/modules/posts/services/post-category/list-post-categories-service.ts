import ICategoryRepository
  from '@modules/posts/infra/repositories/protocols/i-post-category-repository'
import { IPostCategoryResponse } from '@modules/posts/infra/schemas/post-category'

export default class ListPostCategoriesService {
  constructor (
    private readonly categoryRepository: ICategoryRepository) {}

  public async execute (): Promise<IPostCategoryResponse[]> {
    return await this.categoryRepository.find()
  }
}
