import UpdateProductService from '@modules/products/services/product/update-product-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'
import ProductPhotoRepository from '@modules/products/infra/repositories/product-photo-repository'
import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'
import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'
import ProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'

export const makeUpdateProductService = (): UpdateProductService => {
  const productRepository = new ProductRepository()
  const productPrimaryCategoryRepository = new CategoryRepository()
  const textFormatter = new TextFormatter()
  const productCategoryRepository = new ProductCategoryRepository()
  const productPhotoRepository = new ProductPhotoRepository()
  const productSpecificationRepository = new ProductSpecificationRepository()
  const productCustomizedTextController = new ProductCustomizedTextRepository()
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()

  return new UpdateProductService(productRepository, productPrimaryCategoryRepository,
    productSpecificationRepository, productCustomizedTextController, productCategoryRepository,
    productPhotoRepository, productCustomizedImageGroupRelationRepository, textFormatter)
}
