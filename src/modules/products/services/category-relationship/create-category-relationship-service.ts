import AppError from '@shared/errors/app-error'
import { ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'
import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'

export default class CreateCategoryRelationshipService {
  constructor (
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {
  }

  async execute (body: any): Promise<ICategoryRelationshipResponse> {
    const requiredFields = ['category']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    return await this.categoryRelationshipRepository.create(body)
  }
}
