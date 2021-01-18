import IDefaultRepository from '@modules/default/infra/repositories/protocols/i-default-repository'
import { IDefaultResponse } from '@modules/default/infra/schemas/default'

export default class ListDefaultService {
  constructor (
    private readonly defaultRepository: IDefaultRepository) {}

  public async execute (): Promise<IDefaultResponse[]> {
    return await this.defaultRepository.find()
  }
}
