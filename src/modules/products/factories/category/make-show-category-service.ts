import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import ShowCategoryService from '@modules/products/services/category/show-category-service'

export const makeShowCategoryService = (): ShowCategoryService => {
  const categoryRepository = new CategoryRepository()
  return new ShowCategoryService(categoryRepository)
}
