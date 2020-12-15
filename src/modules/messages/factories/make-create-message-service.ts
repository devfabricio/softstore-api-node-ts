import CreateMessageService from '@modules/messages/services/create-message-service'
import MessageRepository from '@modules/messages/infra/repositories/message-repository'
import MessageInboxRepository from '@modules/messages/infra/repositories/message-inbox-repository'
import { UserRepository } from '@modules/users/infra/repositories/user-repository'

export const makeCreateMessageService = (): CreateMessageService => {
  const userRepository = new UserRepository()
  const messageRepository = new MessageRepository()
  const messageInboxRepository = new MessageInboxRepository()
  return new CreateMessageService(userRepository, messageRepository, messageInboxRepository)
}
