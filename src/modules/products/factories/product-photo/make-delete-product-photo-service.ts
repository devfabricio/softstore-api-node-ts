import DeleteProductPhotoService from '@modules/products/services/product-photo/delete-product-photo-service'
import ProductPhotoRepository from '@modules/products/infra/repositories/product-photo-repository'

export const makeDeleteProductPhotoService = (): DeleteProductPhotoService => {
  const productPhotoRepository = new ProductPhotoRepository()
  return new DeleteProductPhotoService(productPhotoRepository)
}
