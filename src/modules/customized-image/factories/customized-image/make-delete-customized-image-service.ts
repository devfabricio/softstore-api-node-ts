import DeleteCustomizedImageService from '@modules/customized-image/services/customized-image/delete-customized-image-service'
import CustomizedImageRepository from '@modules/customized-image/infra/repositories/customized-image-repository'
import CustomizedImageGroupRelationRepository
  from '@modules/customized-image/infra/repositories/customized-image-group-relation-repository'

export const makeDeleteCustomizedImageService = (): DeleteCustomizedImageService => {
  const customizedImageRepository = new CustomizedImageRepository()
  const customizedImageGroupRelationRepository = new CustomizedImageGroupRelationRepository()
  return new DeleteCustomizedImageService(customizedImageRepository, customizedImageGroupRelationRepository)
}
