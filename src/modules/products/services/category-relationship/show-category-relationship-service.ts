import AppError from '@shared/errors/app-error'
import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'
import { ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'

export default class ShowCategoryRelationshipService {
  constructor (
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {}

  public async execute (body: any): Promise<ICategoryRelationshipResponse> {
    const { _id } = body
    let categoryRelationship: ICategoryRelationshipResponse
    if (_id) {
      categoryRelationship = await this.categoryRelationshipRepository.findById(_id)
    }
    if (!categoryRelationship) {
      throw new AppError('CategoryRelationship Object not found')
    }
    return categoryRelationship
  }
}
