import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import DeleteCategoryService from '@modules/products/services/category/delete-category-service'
import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'

export const makeDeleteCategoryService = (): DeleteCategoryService => {
  const categoryRepository = new CategoryRepository()
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  return new DeleteCategoryService(categoryRepository, categoryRelationshipRepository)
}
