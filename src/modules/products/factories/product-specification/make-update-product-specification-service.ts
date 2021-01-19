import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'
import UpdateProductSpecificationService from '@modules/products/services/product-specification/update-product-specification-service'

export const makeUpdateProductSpecificationService = (): UpdateProductSpecificationService => {
  const productSpecificationRepository = new ProductSpecificationRepository()
  return new UpdateProductSpecificationService(productSpecificationRepository)
}
