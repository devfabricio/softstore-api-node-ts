import ProductPhotoRepository from '@modules/products/infra/repositories/product-photo-repository'
import UpdateProductPhotoService from '@modules/products/services/product-photo/update-product-photo-service'

export const makeUpdateProductPhotoService = (): UpdateProductPhotoService => {
  const productPhotoRepository = new ProductPhotoRepository()
  return new UpdateProductPhotoService(productPhotoRepository)
}
