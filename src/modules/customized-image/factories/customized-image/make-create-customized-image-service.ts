import CustomizedImageRepository from '@modules/customized-image/infra/repositories/customized-image-repository'
import CreateCustomizedImageService from '@modules/customized-image/services/customized-image/create-customized-image-service'

export const makeCreateCustomizedImageService = (): CreateCustomizedImageService => {
  const customizedImageRepository = new CustomizedImageRepository()
  return new CreateCustomizedImageService(customizedImageRepository)
}
