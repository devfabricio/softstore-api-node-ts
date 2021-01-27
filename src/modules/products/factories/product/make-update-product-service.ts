import UpdateProductService from '@modules/products/services/product/update-product-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'
import TextFormatter from '@shared/helpers/text-formatter'

export const makeUpdateProductService = (): UpdateProductService => {
  const productRepository = new ProductRepository()
  const textFormatter = new TextFormatter()
  return new UpdateProductService(productRepository, textFormatter)
}
