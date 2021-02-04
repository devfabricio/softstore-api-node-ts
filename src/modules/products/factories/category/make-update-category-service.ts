import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import UpdateCategoryService from '@modules/products/services/category/update-category-service'
import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'
import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'

export const makeUpdateCategoryService = (): UpdateCategoryService => {
  const categoryRepository = new CategoryRepository()
  const categoryRelationshipRepository = new CategoryRelationshipRepository()
  const productCategoryRepository = new ProductCategoryRepository()
  const textFormatter = new TextFormatter()
  return new UpdateCategoryService(categoryRepository, categoryRelationshipRepository, productCategoryRepository, textFormatter)
}
