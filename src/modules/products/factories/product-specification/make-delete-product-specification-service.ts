import DeleteProductSpecificationService from '@modules/products/services/product-specification/delete-product-specification-service'
import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'

export const makeDeleteProductSpecificationService = (): DeleteProductSpecificationService => {
  const productSpecificationRepository = new ProductSpecificationRepository()
  return new DeleteProductSpecificationService(productSpecificationRepository)
}
