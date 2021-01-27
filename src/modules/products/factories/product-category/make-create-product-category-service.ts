import ProductCategoryRepository from '@modules/products/infra/repositories/product-category-repository'
import CreateProductCategoryService from '@modules/products/services/product-category/create-product-category-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'
import CategoryRepository from '@modules/products/infra/repositories/category-repository'

export const makeCreateProductCategoryService = (): CreateProductCategoryService => {
  const categoryRepository = new CategoryRepository()
  const productRepository = new ProductRepository()
  const productCategoryRepository = new ProductCategoryRepository()
  return new CreateProductCategoryService(categoryRepository, productRepository, productCategoryRepository)
}
