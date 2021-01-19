import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'
import ListProductSpecificationService from '@modules/products/services/product-specification/list-product-specification-service'

export const makeListProductSpecificationService = (): ListProductSpecificationService => {
  const productSpecificationRepository = new ProductSpecificationRepository()
  return new ListProductSpecificationService(productSpecificationRepository)
}
