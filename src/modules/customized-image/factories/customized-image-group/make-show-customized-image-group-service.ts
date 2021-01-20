import CustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/customized-image-group-repository'
import ShowCustomizedImageGroupService from '@modules/customized-image/services/customized-image-group/show-customized-image-group-service'

export const makeShowCustomizedImageGroupService = (): ShowCustomizedImageGroupService => {
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  return new ShowCustomizedImageGroupService(customizedImageGroupRepository)
}
