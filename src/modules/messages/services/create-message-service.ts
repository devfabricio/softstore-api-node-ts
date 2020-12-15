import AppError from '@shared/errors/app-error'
import { IMessageModel, IMessageResponse } from '@modules/messages/infra/schemas/message'
import IMessageRepository from '@modules/messages/infra/repositories/protocols/i-message-repository'
import IMessageInboxRepository from '@modules/messages/infra/repositories/protocols/i-message-inbox-repository'
import { IMessageInboxResponse } from '@modules/messages/infra/schemas/message-inbox'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'

export default class CreateMessageService {
  constructor (
    private readonly userRepository: IUserRepository,
    private readonly messageRepository: IMessageRepository,
    private readonly messageInboxRepository: IMessageInboxRepository
  ) {}

  public async execute (body: any): Promise<IMessageResponse> {
    const requiredFields = ['user', 'sender']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw new AppError(`Missing param: ${field}`)
      }
    }
    const { user, sender, messageInbox, messageText, messageImg, messageProduct } = body

    let inbox: IMessageInboxResponse

    if (messageInbox) {
      inbox = await this.messageInboxRepository.findById(messageInbox)
      if (messageText) {
        inbox.lastMessageText = messageText
      }
      inbox.lastSender = sender
      inbox.read = false
      await this.messageInboxRepository.save(inbox)
    } else {
      inbox = await this.messageInboxRepository.create({ user, read: false, lastSender: sender, lastMessageText: messageText })
      const userObj = await this.userRepository.findById(user)
      userObj.messageInbox = inbox._id
      await this.userRepository.save(userObj)
    }

    const message: IMessageModel = { user, sender, messageInbox: inbox._id }

    if (messageText) {
      message.messageText = messageText
    }

    if (messageImg) {
      message.messageImg = messageImg
    }

    if (messageProduct) {
      message.messageProduct = messageProduct
    }

    return await this.messageRepository.create(message)
  }
}
