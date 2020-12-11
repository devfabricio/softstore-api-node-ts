import MessageRepository from '@modules/messages/infra/repositories/message-repository'
import ListMessageService from '@modules/messages/services/list-message-service'

export const makeListMessageService = (): ListMessageService => {
  const messageRepository = new MessageRepository()
  return new ListMessageService(messageRepository)
}
