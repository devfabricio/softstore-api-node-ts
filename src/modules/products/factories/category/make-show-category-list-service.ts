import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import ListCategoriesService from '@modules/products/services/category/list-categories-service'

export const makeShowCategoryListService = (): ListCategoriesService => {
  const productPrimaryCategoryRepository = new CategoryRepository()
  return new ListCategoriesService(productPrimaryCategoryRepository)
}
