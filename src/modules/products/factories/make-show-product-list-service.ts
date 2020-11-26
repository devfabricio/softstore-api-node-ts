import ProductRepository from '@modules/products/infra/repositories/product-repository'
import ShowProductListService from '@modules/products/services/show-product-list-service'

export const makeShowProductListService = (): ShowProductListService => {
  const productRepository = new ProductRepository()
  return new ShowProductListService(productRepository)
}
