import AppError from '@shared/errors/app-error'
import IProductRepository from '@modules/products/infra/repositories/protocols/i-product-repository'

export default class DeleteProductService {
  constructor (
    private readonly productRepository: IProductRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const product = await this.productRepository.findById(id)
    if (!product) {
      throw new AppError('Product not found')
    }

    return await this.productRepository.delete(id)
  }
}
