import DeleteCustomizedImageGroupRelationService from '@modules/customized-image/services/customized-image-group-relation/delete-customized-image-group-relation-service'
import CustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'

export const makeDeleteCustomizedImageGroupRelationService = (): DeleteCustomizedImageGroupRelationService => {
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  return new DeleteCustomizedImageGroupRelationService(customizedImageGroupRelationRepository)
}
