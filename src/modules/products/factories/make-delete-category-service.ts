import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import DeleteCategoryService from '@modules/products/services/delete-category-service'

export const makeDeleteCategoryService = (): DeleteCategoryService => {
  const categoryRepository = new CategoryRepository()
  return new DeleteCategoryService(categoryRepository)
}
