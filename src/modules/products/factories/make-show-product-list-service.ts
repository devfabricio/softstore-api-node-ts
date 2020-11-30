import ProductRepository from '@modules/products/infra/repositories/product-repository'
import ListProductsService from '@modules/products/services/list-products-service'

export const makeShowProductListService = (): ListProductsService => {
  const productRepository = new ProductRepository()
  return new ListProductsService(productRepository)
}
