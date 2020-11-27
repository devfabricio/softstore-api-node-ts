import IProductPrimaryCategoryRepository from '@modules/products/infra/repositories/protocols/i-product-primary-category-repository'
import { IResponseProductPrimaryCategoryModel } from '@modules/products/infra/schemas/product-primary-category'

export default class FakeProductPrimaryCategoryRepository implements IProductPrimaryCategoryRepository {
  private readonly productPrimaryCategoryRepository: IResponseProductPrimaryCategoryModel[] = []

  async find (): Promise<IResponseProductPrimaryCategoryModel[]> {
    return this.productPrimaryCategoryRepository
  }

  async create (name: string, slug: string): Promise<IResponseProductPrimaryCategoryModel> {
    const productPrimaryCategory: IResponseProductPrimaryCategoryModel = { _id: 'any_category_id', name, slug }
    this.productPrimaryCategoryRepository.push(productPrimaryCategory)
    return productPrimaryCategory
  }

  async findById (id: string): Promise<IResponseProductPrimaryCategoryModel> {
    return this.productPrimaryCategoryRepository.find(category => category._id.toString() === id)
  }

  async findByName (name: string): Promise<IResponseProductPrimaryCategoryModel> {
    return this.productPrimaryCategoryRepository.find(category => category.name === name)
  }
}
