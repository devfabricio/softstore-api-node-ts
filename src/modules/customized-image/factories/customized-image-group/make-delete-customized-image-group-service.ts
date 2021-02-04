import DeleteCustomizedImageGroupService from '@modules/customized-image/services/customized-image-group/delete-customized-image-group-service'
import CustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/customized-image-group-repository'
import CustomizedImageGroupRelationRepository
  from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'
import ProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'

export const makeDeleteCustomizedImageGroupService = (): DeleteCustomizedImageGroupService => {
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  return new DeleteCustomizedImageGroupService(customizedImageGroupRepository, customizedImageGroupRelationRepository,
    productCustomizedImageGroupRelationRepository)
}
