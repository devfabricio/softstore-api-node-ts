import IMessageRepository from '@modules/messages/infra/repositories/protocols/i-message-repository'
import { IMessageResponse } from '@modules/messages/infra/schemas/message'
import AppError from '@shared/errors/app-error'

export default class ListMessageService {
  constructor (
    private readonly messageRepository: IMessageRepository) {}

  public async execute (messageInbox?: string): Promise<IMessageResponse[]> {
    if (!messageInbox) {
      throw new AppError('Missing param: messageInbox')
    }
    return await this.messageRepository.findByInboxMessage(messageInbox)
  }
}
