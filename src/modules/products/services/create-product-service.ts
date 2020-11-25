import { Product } from '@modules/products/infra/typeorm/entities/product'
import { inject, injectable } from 'tsyringe'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import IProductRepository from '@modules/products/protocols/i-product-repository'
import AppError from '@shared/errors/app-error'
import ICreateProductDTO from '@modules/products/dtos/i-create-product-dto'
import IProductPrimaryCategoryRepository from '@modules/products/protocols/i-product-primary-category-repository'

@injectable()
export default class CreateProductService {
  constructor (@inject('ProductRepository')
  private readonly productRepository: IProductRepository,
  @inject('ProductPrimaryCategoryRepository')
  private readonly productPrimaryCategoryRepository: IProductPrimaryCategoryRepository,
  @inject('TextFormatter')
  private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<Product> {
    const requiredFields = ['name', 'description', 'thumbImg', 'productPrimaryCategoryID', 'price']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const {
      name, description, thumbImg, price, oldPrice,
      productPrimaryCategoryID, productSecundaryCategoryID
    }: ICreateProductDTO = body

    const productName = this.textFormatter.trim(name)
    const checkIfProductNameExists = await this.productRepository.findByName(productName)
    if (checkIfProductNameExists) {
      throw new AppError('A product with this name already exists')
    }
    const checkIfProductPrimaryCategoryExists = await this.productPrimaryCategoryRepository
      .findById(productPrimaryCategoryID)
    if (!checkIfProductPrimaryCategoryExists) {
      throw new AppError('Invalid product primary category')
    }
    const slug = this.textFormatter.slugConverter(productName)
    const productData: ICreateProductDTO = { name, description, thumbImg, price, slug, productPrimaryCategoryID }
    if (oldPrice) {
      productData.oldPrice = oldPrice
    }
    if (productSecundaryCategoryID) {
      productData.productSecundaryCategoryID = productSecundaryCategoryID
    }
    const product = await this.productRepository.create(productData)
    return product
  }
}
