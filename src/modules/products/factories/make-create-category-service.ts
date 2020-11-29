import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import CreateCategoryService from '@modules/products/services/create-category-service'

export const makeCreateCategoryService = (): CreateCategoryService => {
  const categoryRepository = new CategoryRepository()
  const textFormatter = new TextFormatter()
  return new CreateCategoryService(categoryRepository, textFormatter)
}
