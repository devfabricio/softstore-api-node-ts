import { IMessageInboxModel, IMessageInboxResponse } from '@modules/messages/infra/schemas/message-inbox'

export default interface IMessageInboxRepository {
  find(): Promise<IMessageInboxResponse[]>
  findById (id: string): Promise<IMessageInboxResponse>
  findByUser(user: string): Promise<IMessageInboxResponse>
  create(data: IMessageInboxModel): Promise<IMessageInboxResponse>
  save (messageInbox: IMessageInboxResponse): Promise<IMessageInboxResponse>
}
