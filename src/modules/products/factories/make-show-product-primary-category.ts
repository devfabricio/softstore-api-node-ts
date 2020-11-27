import ProductPrimaryCategoryRepository from '@modules/products/infra/repositories/product-primary-category-repository'
import ShowProductPrimaryCategoryListService from '@modules/products/services/show-product-primary-category-list-service'

export const makeShowProductPrimaryCategoryListService = (): ShowProductPrimaryCategoryListService => {
  const productPrimaryCategoryRepository = new ProductPrimaryCategoryRepository()
  return new ShowProductPrimaryCategoryListService(productPrimaryCategoryRepository)
}
