import AppError from '@shared/errors/app-error'
import { IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'
import IProductCustomizedTextRepository from '@modules/products/infra/repositories/protocols/i-product-customized-text-repository'

export default class UpdateProductCustomizedTextService {
  constructor (
    private readonly productCustomizedTextRepository: IProductCustomizedTextRepository) {}

  public async execute (body: any): Promise<IProductCustomizedTextResponse> {
    const requiredFields = ['any']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    return this.productCustomizedTextRepository.save(body)
  }
}
