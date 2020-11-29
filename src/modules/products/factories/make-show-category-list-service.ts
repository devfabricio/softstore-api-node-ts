import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import ShowCategoryListService from '@modules/products/services/show-category-list-service'

export const makeShowCategoryListService = (): ShowCategoryListService => {
  const productPrimaryCategoryRepository = new CategoryRepository()
  return new ShowCategoryListService(productPrimaryCategoryRepository)
}
