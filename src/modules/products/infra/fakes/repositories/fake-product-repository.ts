import { Product } from '@modules/products/infra/typeorm/entities/product'
import IProductRepository from '@modules/products/protocols/i-product-repository'
import ICreateProductDTO from '@modules/products/dtos/i-create-product-dto'

export default class FakeProductRepository implements IProductRepository {
  private readonly products: Product[] = []

  async create (data: ICreateProductDTO): Promise<Product> {
    const product = new Product()
    Object.assign(product, { id: 'any_id' }, { ...data })
    this.products.push(product)
    return product
  }

  async find (): Promise<Product[]> {
    return this.products
  }

  async findByName (name: string): Promise<Product> {
    return this.products.find(product => product.name === name)
  }
}
