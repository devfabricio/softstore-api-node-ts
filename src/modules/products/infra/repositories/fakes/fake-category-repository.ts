import ICategoryRepository from '@modules/products/infra/repositories/protocols/i-category-repository'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

export default class FakeCategoryRepository implements ICategoryRepository {
  private readonly categoryRepository: ICategoryResponse[] = []

  async find (): Promise<ICategoryResponse[]> {
    return this.categoryRepository
  }

  async create (name: string, slug: string): Promise<ICategoryResponse> {
    const productPrimaryCategory: ICategoryResponse = { _id: 'any_category_id', name, slug, productCounter: 0 }
    this.categoryRepository.push(productPrimaryCategory)
    return productPrimaryCategory
  }

  async findById (id: string): Promise<ICategoryResponse> {
    return this.categoryRepository.find(category => category._id.toString() === id)
  }

  async findByName (name: string): Promise<ICategoryResponse> {
    return this.categoryRepository.find(category => category.name === name)
  }

  async delete (_: string): Promise<boolean> {
    return true
  }

  async save (category: ICategoryResponse): Promise<ICategoryResponse> {
    const findIndex = this.categoryRepository.findIndex(findUser => findUser._id === category._id)
    this.categoryRepository[findIndex] = category
    return category
  }
}
