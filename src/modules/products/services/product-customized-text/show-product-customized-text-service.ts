import AppError from '@shared/errors/app-error'
import IProductCustomizedTextRepository from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'
import { IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'

export default class ShowProductCustomizedTextService {
  constructor (
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository) {}

  public async execute (body: any): Promise<IProductCustomizedTextResponse> {
    const { _id } = body
    let productCustomizedText: IProductCustomizedTextResponse
    if (_id) {
      productCustomizedText = await this.productCustomizedTextRepository.findById(_id)
    }
    if (!productCustomizedText) {
      throw new AppError('ProductCustomizedText Object not found')
    }
    return productCustomizedText
  }
}
