import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'
import ListProductCategoryService from '@modules/products/services/product-category/list-product-category-service'

export const makeListProductCategoryService = (): ListProductCategoryService => {
  const productCategoryRepository = new ProductCategoryRepository()
  return new ListProductCategoryService(productCategoryRepository)
}
