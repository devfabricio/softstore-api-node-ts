import ProductRepository from '@modules/products/infra/repositories/product-repository'
import DeleteProductService from '@modules/products/services/product/delete-product-service'
import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'
import ProductSpecificationRepository from '@modules/products/infra/repositories/product-specification-repository'
import ProductCustomizedTextRepository from '@modules/products/infra/repositories/product-customized-text-repository'
import ProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/product-customized-image-group-relation-repository'
import CategoryRelationshipRepository from '@modules/products/infra/repositories/category-relationship-repository'

export const makeDeleteProductService = (): DeleteProductService => {
  const productRepository = new ProductRepository()
  const productCategoryRepository = new ProductCategoryRepository()
  const productSpecificationRepository = new ProductSpecificationRepository()
  const productCustomizedTextController = new ProductCustomizedTextRepository()
  const productCustomizedImageGroupRelationRepository = new ProductCustomizedImageGroupRelationRepository()
  const categoryRelationshipRepository = new CategoryRelationshipRepository()

  return new DeleteProductService(productRepository, productSpecificationRepository,
    productCustomizedTextController, productCategoryRepository, categoryRelationshipRepository,
    productCustomizedImageGroupRelationRepository)
}
