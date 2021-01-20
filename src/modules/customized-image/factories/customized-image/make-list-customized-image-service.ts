import CustomizedImageRepository from '@modules/customized-image/infra/repositories/customized-image-repository'
import ListCustomizedImageService from '@modules/customized-image/services/customized-image/list-customized-image-service'

export const makeListCustomizedImageService = (): ListCustomizedImageService => {
  const customizedImageRepository = new CustomizedImageRepository()
  return new ListCustomizedImageService(customizedImageRepository)
}
