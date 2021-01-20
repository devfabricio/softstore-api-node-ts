import CustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/customized-image-group-repository'
import CreateCustomizedImageGroupService from '@modules/customized-image/services/customized-image-group/create-customized-image-group-service'

export const makeCreateCustomizedImageGroupService = (): CreateCustomizedImageGroupService => {
  const customizedImageGroupRepository = new CustomizedImageGroupRepository()
  return new CreateCustomizedImageGroupService(customizedImageGroupRepository)
}
