import AddProductQuantityInCategoryService from '@modules/products/services/add-product-quantity-in-category-service'
import CategoryRepository from '@modules/products/infra/repositories/category-repository'

export const makeAddProductQuantityInCategory = (): AddProductQuantityInCategoryService => {
  const categoryRepository = new CategoryRepository()
  return new AddProductQuantityInCategoryService(categoryRepository)
}
