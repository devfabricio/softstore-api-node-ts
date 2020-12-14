import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeListMessageInboxService } from '@modules/messages/factories/make-list-message-inbox-service'

export default class MessageInboxController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listMessageInboxService = makeListMessageInboxService()
    const inboxList = await listMessageInboxService.execute()
    return response.status(200).json(inboxList)
  }
}
