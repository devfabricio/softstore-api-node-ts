import IProductRepository from '@modules/products/protocols/i-product-repository'
import ICreateProductDTO from '@modules/products/dtos/i-create-product-dto'
import { Product } from '@modules/products/infra/typeorm/entities/product'
import { getRepository, Repository } from 'typeorm/index'

export default class ProductRepository implements IProductRepository {
  private readonly ormRepository: Repository<Product>

  constructor () {
    this.ormRepository = getRepository(Product)
  }

  async create (data: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(data)
    await this.ormRepository.save(product)
    return product
  }

  async find (): Promise<Product[]> {
    return this.ormRepository.find()
  }

  async findByName (name: string): Promise<Product> {
    return await this.ormRepository.findOne({
      where: { name }
    })
  }
}
