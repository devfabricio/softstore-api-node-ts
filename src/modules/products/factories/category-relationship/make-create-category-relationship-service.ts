import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'
import CreateCategoryRelationshipService from '@modules/products/services/category-relationship/create-category-relationship-service'

export const makeCreateCategoryRelationshipService = (): CreateCategoryRelationshipService => {
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  return new CreateCategoryRelationshipService(categoryRelationshipRepository)
}
