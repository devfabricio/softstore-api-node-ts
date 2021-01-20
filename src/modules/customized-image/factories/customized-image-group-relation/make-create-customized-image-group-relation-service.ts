import CustomizedImageGroupRelationRepository from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'
import CreateCustomizedImageGroupRelationService from '@modules/customized-image/services/customized-image-group-relation/create-customized-image-group-relation-service'
import CustomizedImageGroupRepository
  from '@modules/customized-image/infra/repositories/customized-image-group-repository'
import CustomizedImageRepository from '@modules/customized-image/infra/repositories/customized-image-repository'

export const makeCreateCustomizedImageGroupRelationService = (): CreateCustomizedImageGroupRelationService => {
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  const customizedImageRepository = new CustomizedImageRepository()
  return new CreateCustomizedImageGroupRelationService(customizedImageGroupRelationRepository,
    customizedImageGroupRepository, customizedImageRepository)
}
