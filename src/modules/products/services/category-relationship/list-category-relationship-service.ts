import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'
import { ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'

export default class ListCategoryRelationshipService {
  constructor (
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {}

  public async execute (): Promise<ICategoryRelationshipResponse[]> {
    return await this.categoryRelationshipRepository.find()
  }
}
