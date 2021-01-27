import AppError from '@shared/errors/app-error'
import IProductCustomizedTextRepository from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'

export default class DeleteProductCustomizedTextService {
  constructor (
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const productCustomizedText = await this.productCustomizedTextRepository.findById(id)
    if (!productCustomizedText) {
      throw new AppError('ProductCustomizedText not found')
    }

    return await this.productCustomizedTextRepository.delete(id)
  }
}
