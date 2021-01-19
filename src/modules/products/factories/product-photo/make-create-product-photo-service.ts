import ProductPhotoRepository from '@modules/products/infra/repositories/product-photo-repository'
import CreateProductPhotoService from '@modules/products/services/product-photo/create-product-photo-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'

export const makeCreateProductPhotoService = (): CreateProductPhotoService => {
  const productPhotoRepository = new ProductPhotoRepository()
  const productRepository = new ProductRepository()
  return new CreateProductPhotoService(productPhotoRepository, productRepository)
}
