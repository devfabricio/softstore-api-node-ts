import DeleteProductCustomizedImageGroupRelationService from '@modules/products/services/product-customized-image-group-relation/delete-product-customized-image-group-relation-service'
import ProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'

export const makeDeleteProductCustomizedImageGroupRelationService = (): DeleteProductCustomizedImageGroupRelationService => {
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  return new DeleteProductCustomizedImageGroupRelationService(productCustomizedImageGroupRelationRepository)
}
