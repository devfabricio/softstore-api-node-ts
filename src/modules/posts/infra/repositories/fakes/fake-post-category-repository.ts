import IPostCategoryRepository from '@modules/posts/infra/repositories/protocols/i-post-category-repository'
import { IPostCategoryResponse } from '@modules/posts/infra/schemas/post-category'

export default class FakePostCategoryRepository implements IPostCategoryRepository {
  private readonly categoryRepository: IPostCategoryResponse[] = []

  async find (): Promise<IPostCategoryResponse[]> {
    return this.categoryRepository
  }

  async create (name: string, slug: string): Promise<IPostCategoryResponse> {
    const productPrimaryCategory: IPostCategoryResponse = { _id: 'any_category_id', name, slug, postCounter: 0 }
    this.categoryRepository.push(productPrimaryCategory)
    return productPrimaryCategory
  }

  async findById (id: string): Promise<IPostCategoryResponse> {
    return this.categoryRepository.find(category => category._id.toString() === id)
  }

  async findBySlug (slug: string): Promise<IPostCategoryResponse> {
    return this.categoryRepository.find(category => category.slug === slug)
  }

  async findByName (name: string): Promise<IPostCategoryResponse> {
    return this.categoryRepository.find(category => category.name === name)
  }

  async delete (_: string): Promise<boolean> {
    return true
  }

  async save (category: IPostCategoryResponse): Promise<IPostCategoryResponse> {
    const findIndex = this.categoryRepository.findIndex(findUser => findUser._id === category._id)
    this.categoryRepository[findIndex] = category
    return category
  }
}
