import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'
import ShowProductCustomizedTextService from '@modules/products/services/product-customized-text/show-product-customized-text-service'

export const makeShowProductCustomizedTextService = (): ShowProductCustomizedTextService => {
  const productCustomizedTextRepository = new ProductCustomizedTextRepository()
  return new ShowProductCustomizedTextService(productCustomizedTextRepository)
}
