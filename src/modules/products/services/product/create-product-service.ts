import { IProductModel } from '@modules/products/infra/schemas/product'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import AppError from '@shared/errors/app-error'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import IProductSpecificationRepository
  from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import IProductCustomizedTextRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import IProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'

export default class CreateProductService {
  constructor (
    private readonly productRepository: IProductRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly productSpecificationRepository: IProductSpecificationRepository,
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository,
    private readonly productCategoryRepository: IProductCategoryRepository,
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository,
    private readonly textFormatter: ITextFormatter) {
  }

  async execute (body: any): Promise<IProductModel> {
    const requiredFields = ['name', 'description', 'thumbImg', 'category', 'status', 'price']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const {
      name, description, thumbImg, price, oldPrice, category, productSpecificationName,
      productSpecificationValue, productCustomizedText, imageGroup
    } = body

    const productName = this.textFormatter.trim(name)
    const checkIfProductNameExists = await this.productRepository.findByName(productName)
    if (checkIfProductNameExists) {
      throw new AppError('A product with this name already exists')
    }

    const slug = this.textFormatter.slugConverter(productName)
    const productData: IProductModel = { name, description, thumbImg, price, slug, ...body }
    if (oldPrice) {
      productData.oldPrice = oldPrice
    }

    const response = await this.productRepository.create(productData)

    if (category) {
      category.map(async (cat: string) => {
        if (cat.length > 0) {
          return await this.productCategoryRepository.create({ category: cat, product: response._id })
        }
      })
    }

    if (productSpecificationName && productSpecificationValue) {
      productSpecificationName.map(async (name: string, index: number) => {
        if (name.length > 0) {
          return await this.productSpecificationRepository.create({ name, value: productSpecificationValue[index], product: response._id })
        }
      })
    }

    if (productCustomizedText) {
      productCustomizedText.map(async (label: string) => {
        if (label.length > 0) {
          return await this.productCustomizedTextRepository.create({ label, product: response._id })
        }
      })
    }

    if (imageGroup) {
      imageGroup.map(async (group: string) => {
        if (group.length > 0) {
          return await this.productCustomizedImageGroupRelationRepository.create({ group: group, product: response._id })
        }
      })
    }

    return response
  }
}
