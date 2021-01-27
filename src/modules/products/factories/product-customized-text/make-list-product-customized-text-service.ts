import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'
import ListProductCustomizedTextService from '@modules/products/services/product-customized-text/list-product-customized-text-service'

export const makeListProductCustomizedTextService = (): ListProductCustomizedTextService => {
  const productCustomizedTextRepository = new ProductCustomizedTextRepository()
  return new ListProductCustomizedTextService(productCustomizedTextRepository)
}
