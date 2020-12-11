import { IMessageModel, IMessageResponse } from '@modules/messages/infra/schemas/message'

export default interface IMessageRepository {
  create(data: IMessageModel): Promise<IMessageResponse>
  findByInboxMessage(messageInbox: string): Promise<IMessageResponse[]>
}
