import AppError from '@shared/errors/app-error'
import ICategoryRepository
  from '@modules/products/infra/repositories/protocols/i-category-repository'
import ICategoryRelationshipRepository
  from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'

export default class DeleteCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository,
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const category = await this.categoryRepository.findById(id)
    if (!category) {
      throw new AppError('Category not found')
    }

    const categoryRelationship = await this.categoryRelationshipRepository.findByCategory(category._id)
    if (!categoryRelationship) {
      throw new AppError('Category Relatioship not found')
    }

    await this.categoryRelationshipRepository.delete(categoryRelationship._id)

    return await this.categoryRepository.delete(id)
  }
}
