import DeleteCustomizedImageGroupService from '@modules/customized-image/services/customized-image-group/delete-customized-image-group-service'
import CustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/customized-image-group-repository'

export const makeDeleteCustomizedImageGroupService = (): DeleteCustomizedImageGroupService => {
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  return new DeleteCustomizedImageGroupService(customizedImageGroupRepository)
}
