import { inject, injectable } from 'tsyringe'
import IProductRepository from '@modules/products/protocols/i-product-repository'
import { Product } from '@modules/products/infra/typeorm/entities/product'

@injectable()
export default class ShowProductListService {
  constructor (@inject('ProductRepository')
  private readonly productRepository: IProductRepository) {}

  public async execute (): Promise<Product[]> {
    return await this.productRepository.find()
  }
}
