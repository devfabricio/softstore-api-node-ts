import ListMessageInboxService from '@modules/messages/services/list-message-inbox-service'
import MessageInboxRepository from '@modules/messages/infra/repositories/message-inbox-repository'

export const makeListMessageInboxService = (): ListMessageInboxService => {
  const messageInboxRepository = new MessageInboxRepository()
  return new ListMessageInboxService(messageInboxRepository)
}
