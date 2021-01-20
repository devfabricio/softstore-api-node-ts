import ProductCustomizedImageGroupRelationRepository from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'
import ShowProductCustomizedImageGroupRelationService from '@modules/products/services/show-product-customized-image-group-relation-service'

export const makeShowProductCustomizedImageGroupRelationService = (): ShowProductCustomizedImageGroupRelationService => {
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  return new ShowProductCustomizedImageGroupRelationService(productCustomizedImageGroupRelationRepository)
}
