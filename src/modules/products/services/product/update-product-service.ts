import AppError from '@shared/errors/app-error'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export default class UpdateProductService {
  constructor (
    private readonly productRepository: IProductRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly textFormatter: ITextFormatter) {}

  public async execute (body: any): Promise<IProductResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, name, description, thumbImg, price, oldPrice, category } = body

    const product = await this.productRepository.findById(_id)
    if (!product) {
      throw new AppError('Product not found')
    }

    if (name !== product.name) {
      const productName = this.textFormatter.trim(name)
      const checkIfProductNameExists = await this.productRepository.findByName(productName)
      if (checkIfProductNameExists) {
        throw new AppError('A product with this name already exists')
      }
      const slug = this.textFormatter.slugConverter(productName)
      product.name = name
      product.slug = slug
    }

    if (category !== product.category) {
      const checkIfCategoryExists = await this.categoryRepository.findById(category)
      if (!checkIfCategoryExists) {
        throw new AppError('Invalid product primary category')
      }
      product.category = category
    }

    product.description = description
    product.thumbImg = thumbImg
    product.price = price
    product.oldPrice = oldPrice

    return this.productRepository.save(product)
  }
}
