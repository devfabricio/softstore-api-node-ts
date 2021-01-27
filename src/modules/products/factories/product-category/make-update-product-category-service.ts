import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'
import UpdateProductCategoryService from '@modules/products/services/product-category/update-product-category-service'

export const makeUpdateProductCategoryService = (): UpdateProductCategoryService => {
  const productCategoryRepository = new ProductCategoryRepository()
  return new UpdateProductCategoryService(productCategoryRepository)
}
