import CustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'
import ListCustomizedImageGroupRelationService from '@modules/customized-image/services/customized-image-group-relation/list-customized-image-group-relation-service'

export const makeListCustomizedImageGroupRelationService = (): ListCustomizedImageGroupRelationService => {
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  return new ListCustomizedImageGroupRelationService(customizedImageGroupRelationRepository)
}
