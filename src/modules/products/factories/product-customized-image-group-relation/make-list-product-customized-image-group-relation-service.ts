import ProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'
import ListProductCustomizedImageGroupRelationService from '@modules/products/services/product-customized-image-group-relation/list-product-customized-image-group-relation-service'

export const makeListProductCustomizedImageGroupRelationService = (): ListProductCustomizedImageGroupRelationService => {
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  return new ListProductCustomizedImageGroupRelationService(productCustomizedImageGroupRelationRepository)
}
