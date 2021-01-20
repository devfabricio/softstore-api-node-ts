import CustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/customized-image-group-repository'
import ListCustomizedImageGroupService from '@modules/customized-image/services/customized-image-group/list-customized-image-group-service'

export const makeListCustomizedImageGroupService = (): ListCustomizedImageGroupService => {
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  return new ListCustomizedImageGroupService(customizedImageGroupRepository)
}
