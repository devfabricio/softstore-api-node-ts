import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'
import ShowCategoryRelationshipService from '@modules/products/services/category-relationship/show-category-relationship-service'

export const makeShowCategoryRelationshipService = (): ShowCategoryRelationshipService => {
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  return new ShowCategoryRelationshipService(categoryRelationshipRepository)
}
