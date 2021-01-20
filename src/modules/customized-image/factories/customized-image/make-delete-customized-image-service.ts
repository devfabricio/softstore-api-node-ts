import DeleteCustomizedImageService from '@modules/customized-image/services/customized-image/delete-customized-image-service'
import CustomizedImageRepository from '@modules/customized-image/infra/repositories/customized-image-repository'

export const makeDeleteCustomizedImageService = (): DeleteCustomizedImageService => {
  const customizedImageRepository = new CustomizedImageRepository()
  return new DeleteCustomizedImageService(customizedImageRepository)
}
