import DeleteCategoryRelationshipService from '@modules/products/services/category-relationship/delete-category-relationship-service'
import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'

export const makeDeleteCategoryRelationshipService = (): DeleteCategoryRelationshipService => {
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  return new DeleteCategoryRelationshipService(categoryRelationshipRepository)
}
