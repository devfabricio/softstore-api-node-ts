import ProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'
import CreateProductCustomizedImageGroupRelationService from '@modules/products/services/product-customized-image-group-relation/create-product-customized-image-group-relation-service'

export const makeCreateProductCustomizedImageGroupRelationService = (): CreateProductCustomizedImageGroupRelationService => {
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  return new CreateProductCustomizedImageGroupRelationService(productCustomizedImageGroupRelationRepository)
}
