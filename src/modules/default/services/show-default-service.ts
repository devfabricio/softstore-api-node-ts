import AppError from '@shared/errors/app-error'
import IDefaultRepository from '@modules/default/infra/repositories/protocols/i-default-repository'
import { IDefaultResponse } from '@modules/default/infra/schemas/default'

export default class ShowDefaultService {
  constructor (
    private readonly defaultRepository: IDefaultRepository) {}

  public async execute (body: any): Promise<IDefaultResponse> {
    const { _id } = body
    let defaultObj: IDefaultResponse
    if (_id) {
      defaultObj = await this.defaultRepository.findById(_id)
    }
    if (!defaultObj) {
      throw new AppError('Default Object not found')
    }
    return defaultObj
  }
}
