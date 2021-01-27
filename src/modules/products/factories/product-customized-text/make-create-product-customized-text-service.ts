import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'
import CreateProductCustomizedTextService from '@modules/products/services/product-customized-text/create-product-customized-text-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'

export const makeCreateProductCustomizedTextService = (): CreateProductCustomizedTextService => {
  const productCustomizedTextRepository = new ProductCustomizedTextRepository()
  const productRepository = new ProductRepository()
  return new CreateProductCustomizedTextService(productCustomizedTextRepository, productRepository)
}
