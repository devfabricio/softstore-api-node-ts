import CustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/customized-image-group-repository'
import UpdateCustomizedImageGroupService from '@modules/customized-image/services/customized-image-group/update-customized-image-group-service'

export const makeUpdateCustomizedImageGroupService = (): UpdateCustomizedImageGroupService => {
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  return new UpdateCustomizedImageGroupService(customizedImageGroupRepository)
}
