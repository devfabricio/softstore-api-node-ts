import { Product } from '@modules/products/infra/typeorm/entities/product'
import ICreateProductDTO from '@modules/products/dtos/i-create-product-dto'

export default interface IProductRepository {
  find(): Promise<Product[]>
  create(data: ICreateProductDTO): Promise<Product>
  findByName(name: string): Promise<Product>
}
