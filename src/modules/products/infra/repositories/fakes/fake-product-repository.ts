import { IProductModel, IResponseProductModel } from '@modules/products/infra/schemas/product'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class FakeProductRepository implements IProductRepository {
  private readonly products: IResponseProductModel[] = []

  async create (data: IProductModel): Promise<IResponseProductModel> {
    const product = { _id: 'any_id', ...data }
    this.products.push(product)
    return product
  }

  async find (): Promise<IResponseProductModel[]> {
    return this.products
  }

  async findByName (name: string): Promise<IResponseProductModel> {
    return this.products.find(product => product.name === name)
  }
}
