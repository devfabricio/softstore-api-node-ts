import IMessageRepository from '@modules/messages/infra/repositories/protocols/i-message-repository'
import { Model } from 'mongoose'
import MessageSchema, { IMessageDocument, IMessageModel, IMessageResponse } from '@modules/messages/infra/schemas/message'

export default class MessageRepository implements IMessageRepository {
  private readonly repository: Model<IMessageDocument>
  private readonly itemsPerPage = 15
  constructor () {
    this.repository = MessageSchema
  }

  async create (data: IMessageModel): Promise<IMessageResponse> {
    const message = await this.repository.create(data)
    return await message.save()
  }

  async findByInboxMessage (messageInbox: string, page: number): Promise<IMessageResponse[]> {
    return this.repository.find({ messageInbox })
      .populate('user')
      .limit(this.itemsPerPage)
      .skip((page - 1) * page)
      .sort({ createdAt: 'desc' })
  }
}
