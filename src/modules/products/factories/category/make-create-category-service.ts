import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import CreateCategoryService from '@modules/products/services/category/create-category-service'
import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'

export const makeCreateCategoryService = (): CreateCategoryService => {
  const categoryRepository = new CategoryRepository()
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  const textFormatter = new TextFormatter()
  return new CreateCategoryService(categoryRepository, categoryRelationshipRepository, textFormatter)
}
