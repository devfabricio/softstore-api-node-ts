import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'
import ShowProductCategoryService from '@modules/products/services/product-category/show-product-category-service'

export const makeShowProductCategoryService = (): ShowProductCategoryService => {
  const productCategoryRepository = new ProductCategoryRepository()
  return new ShowProductCategoryService(productCategoryRepository)
}
