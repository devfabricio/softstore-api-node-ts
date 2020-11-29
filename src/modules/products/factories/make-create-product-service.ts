import CreateProductService from '@modules/products/services/create-product-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'
import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import TextFormatter from '@shared/helpers/text-formatter'

export const makeCreateProductService = (): CreateProductService => {
  const productRepository = new ProductRepository()
  const productPrimaryCategoryRepository = new CategoryRepository()
  const textFormatter = new TextFormatter()
  return new CreateProductService(productRepository, productPrimaryCategoryRepository, textFormatter)
}
