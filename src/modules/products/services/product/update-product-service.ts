import AppError from '@shared/errors/app-error'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import { IProductResponse } from '@modules/products/infra/schemas/product'
import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import IProductSpecificationRepository
  from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import IProductCustomizedTextRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'
import IProductPhotoRepository from '@modules/products/infra/repositories/protocols/i-product-photo-repository'
import IProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import { getImageSize } from '@shared/utils/image-size'
import { IProductPhotoModel } from '@modules/products/infra/schemas/product-photo'

export default class UpdateProductService {
  constructor (
    private readonly productRepository: IProductRepository,
    private readonly categoryRepository: ICategoryRepository,
    private readonly productSpecificationRepository: IProductSpecificationRepository,
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository,
    private readonly productCategoryRepository: IProductCategoryRepository,
    private readonly productPhotoRepository: IProductPhotoRepository,
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository,
    private readonly textFormatter: ITextFormatter) {}

  public async execute (body: any): Promise<IProductResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const {
      _id, name, description, thumbImg, price, oldPrice, costPerItem, quantityInStock, sku,
      barCode, weight, packingHeight, packingLength, packingWidth, category, productSpecificationName,
      productSpecificationValue, productCustomizedText, imageGroup, photos
    } = body

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

    product.description = description
    product.thumbImg = thumbImg
    product.price = price
    product.oldPrice = oldPrice
    product.costPerItem = costPerItem

    if (product.quantityInStock) product.quantityInStock = quantityInStock
    if (product.sku) product.sku = sku
    if (product.barCode) product.barCode = barCode
    if (product.weight) product.weight = weight
    if (product.packingHeight) product.packingHeight = packingHeight
    if (product.packingLength) product.packingLength = packingLength
    if (product.packingWidth) product.packingWidth = packingWidth

    if (category) {
      await this.productCategoryRepository.deleteMany(product._id)
      category.map(async (cat: string) => {
        if (cat.length > 0) {
          return await this.productCategoryRepository.create({ category: cat, product: product._id })
        }
      })
    }

    if (productSpecificationName && productSpecificationValue) {
      await this.productSpecificationRepository.deleteMany(product._id)
      productSpecificationName.map(async (name: string, index: number) => {
        if (name.length > 0) {
          return await this.productSpecificationRepository.create({ name, value: productSpecificationValue[index], product: product._id })
        }
      })
    }

    if (productCustomizedText) {
      await this.productCustomizedTextRepository.deleteMany(product._id)
      productCustomizedText.map(async (label: string) => {
        if (label.length > 0) {
          return await this.productCustomizedTextRepository.create({ label, product: product._id })
        }
      })
    }

    if (imageGroup) {
      await this.productCustomizedImageGroupRelationRepository.deleteMany(product._id)
      imageGroup.map(async (group: string) => {
        if (group.length > 0) {
          return await this.productCustomizedImageGroupRelationRepository.create({ group: group, product: product._id })
        }
      })
    }

    if (photos) {
      photos.map(async (photo: { path: string, thumbPath: string }) => {
        const imageSize = await getImageSize(`${process.env.S3_URL_PREFIX}${photo.path}`)
        const thumbImageSize = await getImageSize(`${process.env.S3_URL_PREFIX}${photo.thumbPath}`)
        const photoData: IProductPhotoModel = {
          width: imageSize.width,
          height: imageSize.height,
          thumbWidth: thumbImageSize.width,
          thumbHeight: thumbImageSize.height,
          path: photo.path,
          thumbPath: photo.thumbPath,
          product: product._id
        }
        return await this.productPhotoRepository.create(photoData)
      })
    }

    return this.productRepository.save(product)
  }
}
