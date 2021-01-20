import CustomizedImageRepository from '@modules/customized-image/infra/repositories/customized-image-repository'
import ShowCustomizedImageService from '@modules/customized-image/services/customized-image/show-customized-image-service'

export const makeShowCustomizedImageService = (): ShowCustomizedImageService => {
  const customizedImageRepository = new CustomizedImageRepository()
  return new ShowCustomizedImageService(customizedImageRepository)
}
