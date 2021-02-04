import AppError from '@shared/errors/app-error'
import ICategoryRepository
  from '@modules/products/infra/repositories/protocols/i-category-repository'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'
import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'
import { ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'
import ICategoryRelationshipRepository
  from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'
import IProductCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-category-repository'

export default class UpdateCategoryService {
  constructor (
    private readonly categoryRepository: ICategoryRepository,
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository,
    private readonly productCategoryRepository: IProductCategoryRepository,
    private readonly textFormatter: ITextFormatter) {}

  public async execute (body: any): Promise<ICategoryResponse> {
    const requiredFields = ['_id']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }

    const { _id, name, parent } = body

    const category = await this.categoryRepository.findById(_id)
    if (!category) {
      throw new AppError('Category not found')
    }

    if (name !== category.name) {
      category.name = this.textFormatter.trim(name)
      category.slug = this.textFormatter.slugConverter(name)
    }

    const response = await this.categoryRepository.save(category)

    const categoryRelationship = await this.categoryRelationshipRepository.findByCategory(_id)

    const addCategoryParents = async (categoryId: string, productId: string): Promise<void> => {
      const category = await this.categoryRelationshipRepository.findByCategory(categoryId)
      if (category.parent) {
        const parentId = String(category.parent)
        const currentParentCategoryRelationship = await this.categoryRelationshipRepository.findByCategory(parentId)
        currentParentCategoryRelationship.count += categoryRelationship.count
        await this.categoryRelationshipRepository.save(currentParentCategoryRelationship)
        await this.productCategoryRepository.create({ product: productId, category: parentId })
        await addCategoryParents(parentId, productId)
      }
    }

    const removeCategoryParents = async (oldParentCategoryId: string, productId: string): Promise<void> => {
      const category = await this.categoryRelationshipRepository.findByCategory(oldParentCategoryId)
      if (category.parent) {
        const parentId = String(category.parent)
        const currentParentCategoryRelationship = await this.categoryRelationshipRepository.findByCategory(parentId)
        currentParentCategoryRelationship.count -= categoryRelationship.count
        await this.categoryRelationshipRepository.save(currentParentCategoryRelationship)
        await this.productCategoryRepository
          .deleteByProductAndCategory(productId, parentId)
        await removeCategoryParents(parentId, productId)
      }
    }

    const categoryRelationshipParent = String(categoryRelationship.parent)

    console.log(parent !== categoryRelationshipParent)

    if (parent !== categoryRelationshipParent) {
      const oldParentCategoryRelationship = await this.categoryRelationshipRepository.findByCategory(categoryRelationshipParent)

      if (oldParentCategoryRelationship.count > 0) {
        oldParentCategoryRelationship.count -= categoryRelationship.count
        await this.categoryRelationshipRepository.save(oldParentCategoryRelationship)
      }

      if (parent) {
        const currentParentCategoryRelationship = await this.categoryRelationshipRepository.findByCategory(parent)
        currentParentCategoryRelationship.count += categoryRelationship.count
        await this.categoryRelationshipRepository.save(currentParentCategoryRelationship)
      }

      const productsCategories = await this.productCategoryRepository.findByCategory(_id)
      for (const productCategory of productsCategories) {
        await this.productCategoryRepository
          .deleteByProductAndCategory(String(productCategory.product), String(oldParentCategoryRelationship.category))
        await removeCategoryParents(String(oldParentCategoryRelationship.category), String(productCategory.product))

        await this.productCategoryRepository.create({ product: productCategory.product, category: parent })
        await addCategoryParents(parent, String(productCategory.product))
      }
    }

    const categoryRelationshipData: ICategoryRelationshipResponse = {
      _id: categoryRelationship._id,
      category: _id,
      count: categoryRelationship.count,
      parent: parent
    }

    await this.categoryRelationshipRepository.save(categoryRelationshipData)

    return response
  }
}
