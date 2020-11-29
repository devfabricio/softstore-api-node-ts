import AddProductQuantityInCategory from '@modules/products/services/add-product-quantity-in-category'
import CategoryRepository from '@modules/products/infra/repositories/category-repository'

export const makeAddProductQuantityInCategory = (): AddProductQuantityInCategory => {
  const categoryRepository = new CategoryRepository()
  return new AddProductQuantityInCategory(categoryRepository)
}
