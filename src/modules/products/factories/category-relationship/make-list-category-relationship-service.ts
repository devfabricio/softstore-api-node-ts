import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'
import ListCategoryRelationshipService from '@modules/products/services/category-relationship/list-category-relationship-service'

export const makeListCategoryRelationshipService = (): ListCategoryRelationshipService => {
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  return new ListCategoryRelationshipService(categoryRelationshipRepository)
}
