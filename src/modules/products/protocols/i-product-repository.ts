import { Product } from '@modules/products/infra/typeorm/entities/product'
import ICreateProductDTO from '@modules/products/dtos/i-create-product-dto'

export default interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>
}
