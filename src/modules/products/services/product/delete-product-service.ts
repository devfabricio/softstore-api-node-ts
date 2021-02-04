import AppError from '@shared/errors/app-error'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'
import IProductSpecificationRepository
  from '@modules/products/infra/repositories/protocols/i-product-specification-repository'
import IProductCustomizedTextRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'
import IProductCustomizedImageGroupRelationRepository
  from '@modules/products/infra/repositories/protocols/i-product-customized-image-group-relation-repository'
import ICategoryRelationshipRepository
  from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'

export default class DeleteProductService {
  constructor (
    private readonly productRepository: IProductRepository,
    private readonly productSpecificationRepository: IProductSpecificationRepository,
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository,
    private readonly productCategoryRepository: IProductCategoryRepository,
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository,
    private readonly productCustomizedImageGroupRelationRepository: IProductCustomizedImageGroupRelationRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const product = await this.productRepository.findById(id)
    if (!product) {
      throw new AppError('Product not found')
    }

    const productCategories = await this.productCategoryRepository.findByProduct(id)
    for (const productCategory of productCategories) {
      const categoryRelationship = await this.categoryRelationshipRepository.findByCategory(String(productCategory.category))
      categoryRelationship.count -= 1
      await this.categoryRelationshipRepository.save(categoryRelationship)
    }

    await this.productCategoryRepository.deleteMany(product._id)
    await this.productSpecificationRepository.deleteMany(id)
    await this.productCustomizedTextRepository.deleteMany(product._id)
    await this.productCustomizedImageGroupRelationRepository.deleteManyByProduct(product._id)

    return await this.productRepository.delete(id)
  }
}
