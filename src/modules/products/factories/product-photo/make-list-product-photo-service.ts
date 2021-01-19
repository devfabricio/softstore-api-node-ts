import ProductPhotoRepository from '@modules/products/infra/repositories/product-photo-repository'
import ListProductPhotoService from '@modules/products/services/product-photo/list-product-photo-service'

export const makeListProductPhotoService = (): ListProductPhotoService => {
  const productPhotoRepository = new ProductPhotoRepository()
  return new ListProductPhotoService(productPhotoRepository)
}
