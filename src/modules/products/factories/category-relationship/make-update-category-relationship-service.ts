import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'
import UpdateCategoryRelationshipService from '@modules/products/services/category-relationship/update-category-relationship-service'

export const makeUpdateCategoryRelationshipService = (): UpdateCategoryRelationshipService => {
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  return new UpdateCategoryRelationshipService(categoryRelationshipRepository)
}
