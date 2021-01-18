import ProductRepository from '@modules/products/infra/repositories/product-repository'
import DeleteProductService from '@modules/products/services/product/delete-product-service'

export const makeDeleteProductService = (): DeleteProductService => {
  const productRepository = new ProductRepository()
  return new DeleteProductService(productRepository)
}
