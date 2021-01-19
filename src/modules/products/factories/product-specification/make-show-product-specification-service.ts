import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'
import ShowProductSpecificationService from '@modules/products/services/product-specification/show-product-specification-service'

export const makeShowProductSpecificationService = (): ShowProductSpecificationService => {
  const productSpecificationRepository = new ProductSpecificationRepository()
  return new ShowProductSpecificationService(productSpecificationRepository)
}
