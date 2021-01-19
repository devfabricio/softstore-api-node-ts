import AppError from '@shared/errors/app-error'
import IProductSpecificationRepository from '@modules/products/infra/repositories/protocols/i-product-specification-repository'

export default class DeleteProductSpecificationService {
  constructor (
    private readonly productSpecificationRepository: IProductSpecificationRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const productSpecification = await this.productSpecificationRepository.findById(id)
    if (!productSpecification) {
      throw new AppError('ProductSpecification not found')
    }

    return await this.productSpecificationRepository.delete(id)
  }
}
