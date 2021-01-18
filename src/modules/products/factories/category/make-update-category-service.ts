import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import UpdateCategoryService from '@modules/products/services/category/update-category-service'

export const makeUpdateCategoryService = (): UpdateCategoryService => {
  const categoryRepository = new CategoryRepository()
  const textFormatter = new TextFormatter()
  return new UpdateCategoryService(categoryRepository, textFormatter)
}
