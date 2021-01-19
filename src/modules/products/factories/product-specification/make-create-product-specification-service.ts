import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'
import CreateProductSpecificationService from '@modules/products/services/product-specification/create-product-specification-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'

export const makeCreateProductSpecificationService = (): CreateProductSpecificationService => {
  const productSpecificationRepository = new ProductSpecificationRepository()
  const productRepository = new ProductRepository()
  return new CreateProductSpecificationService(productSpecificationRepository, productRepository)
}
