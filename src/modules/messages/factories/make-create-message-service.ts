import CreateMessageService from '@modules/messages/services/create-message-service'
import MessageRepository from '@modules/messages/infra/repositories/message-repository'
import MessageInboxRepository from '@modules/messages/infra/repositories/message-inbox-repository'

export const makeCreateMessageService = (): CreateMessageService => {
  const messageRepository = new MessageRepository()
  const messageInboxRepository = new MessageInboxRepository()
  return new CreateMessageService(messageRepository, messageInboxRepository)
}
