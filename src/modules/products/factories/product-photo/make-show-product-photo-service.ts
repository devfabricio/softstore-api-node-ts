import ProductPhotoRepository from '@modules/products/infra/repositories/product-photo-repository'
import ShowProductPhotoService from '@modules/products/services/product-photo/show-product-photo-service'

export const makeShowProductPhotoService = (): ShowProductPhotoService => {
  const productPhotoRepository = new ProductPhotoRepository()
  return new ShowProductPhotoService(productPhotoRepository)
}
