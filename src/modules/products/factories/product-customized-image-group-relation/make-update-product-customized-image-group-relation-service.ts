import ProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'
import UpdateProductCustomizedImageGroupRelationService from '@modules/products/services/update-product-customized-image-group-relation-service'

export const makeUpdateProductCustomizedImageGroupRelationService = (): UpdateProductCustomizedImageGroupRelationService => {
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  return new UpdateProductCustomizedImageGroupRelationService(productCustomizedImageGroupRelationRepository)
}
