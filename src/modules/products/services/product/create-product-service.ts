import { IProductModel } from '@modules/products/infra/schemas/product'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import AppError from '@shared/errors/app-error'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'

export default class CreateProductService {
  constructor (
    private readonly productRepository: IProductRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<IProductModel> {
    const requiredFields = ['name', 'description', 'thumbImg', 'category', 'price']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const {
      name, description, thumbImg, price, oldPrice, category
    } = body

    const productName = this.textFormatter.trim(name)
    const checkIfProductNameExists = await this.productRepository.findByName(productName)
    if (checkIfProductNameExists) {
      throw new AppError('A product with this name already exists')
    }
    const checkIfProductPrimaryCategoryExists = await this.categoryRepository
      .findById(category)
    if (!checkIfProductPrimaryCategoryExists) {
      throw new AppError('Invalid product primary category')
    }
    const slug = this.textFormatter.slugConverter(productName)
    const productData: IProductModel = { name, description, thumbImg, price, slug, category }
    if (oldPrice) {
      productData.oldPrice = oldPrice
    }
    return await this.productRepository.create(productData)
  }
}
