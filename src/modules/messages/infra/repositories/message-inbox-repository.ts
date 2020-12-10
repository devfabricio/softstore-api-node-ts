import IMessageInboxRepository from '@modules/messages/infra/repositories/protocols/i-message-inbox-repository'
import MessageInboxSchema, {
  IMessageInboxDocument,
  IMessageInboxModel,
  IMessageInboxResponse
} from '@modules/messages/infra/schemas/message-inbox'
import { Model } from 'mongoose'

export default class MessageInboxRepository implements IMessageInboxRepository {
  private readonly repository: Model<IMessageInboxDocument>

  constructor () {
    this.repository = MessageInboxSchema
  }

  async find (): Promise<IMessageInboxResponse[]> {
    return this.repository.find().populate('sender')
  }

  async findById (id: string): Promise<IMessageInboxResponse> {
    return this.repository.findById(id).populate('sender')
  }

  async findByUser (user: string): Promise<IMessageInboxResponse> {
    return this.repository.findOne({ user })
  }

  async create (data: IMessageInboxModel): Promise<IMessageInboxResponse> {
    const inbox = await this.repository.create(data)
    return await inbox.save()
  }

  async save (messageInbox: IMessageInboxResponse): Promise<IMessageInboxResponse> {
    return this.repository.updateOne({ _id: messageInbox._id },{ $set: { ...messageInbox } })
  }
}
