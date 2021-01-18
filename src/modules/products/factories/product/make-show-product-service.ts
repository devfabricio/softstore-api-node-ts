import ProductRepository from '@modules/products/infra/repositories/product-repository'
import ShowProductService from '@modules/products/services/product/show-product-service'

export const makeShowProductService = (): ShowProductService => {
  const productRepository = new ProductRepository()
  return new ShowProductService(productRepository)
}
