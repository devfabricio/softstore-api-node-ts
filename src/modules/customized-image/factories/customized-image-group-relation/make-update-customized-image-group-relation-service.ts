import CustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'
import UpdateCustomizedImageGroupRelationService from '@modules/customized-image/services/customized-image-group-relation/update-customized-image-group-relation-service'

export const makeUpdateCustomizedImageGroupRelationService = (): UpdateCustomizedImageGroupRelationService => {
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  return new UpdateCustomizedImageGroupRelationService(customizedImageGroupRelationRepository)
}
