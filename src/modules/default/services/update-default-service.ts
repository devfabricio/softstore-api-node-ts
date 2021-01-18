import AppError from '@shared/errors/app-error'
import { IDefaultResponse } from '@modules/default/infra/schemas/default'
import IDefaultRepository from '@modules/default/infra/repositories/protocols/i-default-repository'

export default class UpdateDefaultService {
  constructor (
    private readonly defaultRepository: IDefaultRepository) {}

  public async execute (body: any): Promise<IDefaultResponse> {
    const requiredFields = ['any']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }

      return this.defaultRepository.save(body)
    }
  }
}
