import ProductRepository from '@modules/products/infra/repositories/product-repository'
import ListProductsService from '@modules/products/services/product/list-products-service'

export const makeListProductService = (): ListProductsService => {
  const productRepository = new ProductRepository()
  return new ListProductsService(productRepository)
}
