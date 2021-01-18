import AppError from '@shared/errors/app-error'
import IPostCategoryRepository
  from '@modules/posts/infra/repositories/protocols/i-post-category-repository'

export default class DeletePostCategoryService {
  constructor (
    private readonly postCategoryRepository: IPostCategoryRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const category = await this.postCategoryRepository.findById(id)
    if (!category) {
      throw new AppError('Category not found')
    }

    return await this.postCategoryRepository.delete(id)
  }
}
