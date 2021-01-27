import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'
import UpdateProductCustomizedTextService from '@modules/products/services/product-customized-text/update-product-customized-text-service'

export const makeUpdateProductCustomizedTextService = (): UpdateProductCustomizedTextService => {
  const productCustomizedTextRepository = new ProductCustomizedTextRepository()
  return new UpdateProductCustomizedTextService(productCustomizedTextRepository)
}
