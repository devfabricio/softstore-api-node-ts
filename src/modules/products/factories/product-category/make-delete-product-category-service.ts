import DeleteProductCategoryService from '@modules/products/services/product-category/delete-product-category-service'
import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'

export const makeDeleteProductCategoryService = (): DeleteProductCategoryService => {
  const productCategoryRepository = new ProductCategoryRepository()
  return new DeleteProductCategoryService(productCategoryRepository)
}
