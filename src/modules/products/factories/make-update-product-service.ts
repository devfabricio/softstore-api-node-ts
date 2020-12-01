import UpdateProductService from '@modules/products/services/update-product-service'
import ProductRepository from '@modules/products/infra/repositories/product-repository'
import CategoryRepository from '@modules/products/infra/repositories/category-repository'
import TextFormatter from '@shared/helpers/text-formatter'

export const makeUpdateProductService = (): UpdateProductService => {
  const productRepository = new ProductRepository()
  const productPrimaryCategoryRepository = new CategoryRepository()
  const textFormatter = new TextFormatter()
  return new UpdateProductService(productRepository, productPrimaryCategoryRepository, textFormatter)
}
