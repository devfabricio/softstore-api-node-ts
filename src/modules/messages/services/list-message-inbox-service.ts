import IMessageInboxRepository from '@modules/messages/infra/repositories/protocols/i-message-inbox-repository'
import { IMessageInboxResponse } from '@modules/messages/infra/schemas/message-inbox'

export default class ListMessageInboxService {
  constructor (
    private readonly messageInboxRepository: IMessageInboxRepository) {}

  public async execute (): Promise<IMessageInboxResponse[]> {
    return await this.messageInboxRepository.find()
  }
}
