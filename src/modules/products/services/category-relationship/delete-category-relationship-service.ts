import AppError from '@shared/errors/app-error'
import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'

export default class DeleteCategoryRelationshipService {
  constructor (
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const categoryRelationship = await this.categoryRelationshipRepository.findById(id)
    if (!categoryRelationship) {
      throw new AppError('CategoryRelationship not found')
    }

    return await this.categoryRelationshipRepository.delete(id)
  }
}
