import DeleteProductCustomizedTextService from '@modules/products/services/product-customized-text/delete-product-customized-text-service'
import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'

export const makeDeleteProductCustomizedTextService = (): DeleteProductCustomizedTextService => {
  const productCustomizedTextRepository = new ProductCustomizedTextRepository()
  return new DeleteProductCustomizedTextService(productCustomizedTextRepository)
}
