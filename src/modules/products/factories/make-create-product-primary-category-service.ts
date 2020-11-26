import ProductPrimaryCategoryRepository from '@modules/products/infra/repositories/product-primary-category-repository'
import TextFormatter from '@shared/helpers/text-formatter'
import CreateProductPrimaryCategoryService from '@modules/products/services/create-product-primary-category-service'

export const makeCreateProductPrimaryCategoryService = (): CreateProductPrimaryCategoryService => {
  const productPrimaryCategoryRepository = new ProductPrimaryCategoryRepository()
  const textFormatter = new TextFormatter()
  return new CreateProductPrimaryCategoryService(productPrimaryCategoryRepository, textFormatter)
}
