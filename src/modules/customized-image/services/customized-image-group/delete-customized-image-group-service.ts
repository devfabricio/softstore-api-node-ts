import AppError from '@shared/errors/app-error'
import ICustomizedImageGroupRepository from '@modules/customized-image/infra/repositories/protocols/i-customized-image-group-repository'

export default class DeleteCustomizedImageGroupService {
  constructor (
    private readonly customizedImageGroupRepository: ICustomizedImageGroupRepository) {}

  public async execute (id?: any): Promise<boolean> {
    if (!id) {
      throw new AppError('Missing param: id')
    }

    const customizedImageGroup = await this.customizedImageGroupRepository.findById(id)
    if (!customizedImageGroup) {
      throw new AppError('CustomizedImageGroup not found')
    }

    return await this.customizedImageGroupRepository.delete(id)
  }
}
