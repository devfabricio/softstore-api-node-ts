import CustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'
import ShowCustomizedImageGroupRelationService from '@modules/customized-image/services/customized-image-group-relation/show-customized-image-group-relation-service'

export const makeShowCustomizedImageGroupRelationService = (): ShowCustomizedImageGroupRelationService => {
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  return new ShowCustomizedImageGroupRelationService(customizedImageGroupRelationRepository)
}
