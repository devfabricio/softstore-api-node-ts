import { IProductModel, IProductResponse } from '@modules/products/infra/schemas/product'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class FakeProductRepository implements IProductRepository {
  private readonly products: IProductResponse[] = []

  async create (data: IProductModel): Promise<IProductResponse> {
    const product = { _id: 'any_id', ...data }
    this.products.push(product)
    return product
  }

  async find (): Promise<IProductResponse[]> {
    return this.products
  }

  async findByName (name: string): Promise<IProductResponse> {
    return this.products.find(product => product.name === name)
  }

  async findByCategory (category: string): Promise<IProductResponse[]> {
    return this.products.filter(product => product.category === category)
  }

  async findById (id: string): Promise<IProductResponse> {
    return this.products.find(product => product._id.toString() === id)
  }

  async findBySlug (slug: string): Promise<IProductResponse> {
    return this.products.find(product => product.slug === slug)
  }

  async save (product: IProductResponse): Promise<IProductResponse> {
    const findIndex = this.products.findIndex(findUser => findUser._id === product._id)
    this.products[findIndex] = product
    return product
  }
}
