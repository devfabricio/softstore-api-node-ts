import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeCreateMessageService } from '@modules/messages/factories/make-create-message-service'
import { makeListMessageService } from '@modules/messages/factories/make-list-message-service'
import app from '@shared/main/app'

export default class MessageController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const createMessageService = makeCreateMessageService()
    const message = await createMessageService.execute(request.body)
    app.getIO().emit('message', { action: 'create', message })
    return response.status(201).json(message)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const messageInbox = request.params.messageInbox
    let page = 1
    if (request.query.page) {
      page = Number(request.query.page)
    }
    const listMessageService = makeListMessageService()
    const messages = await listMessageService.execute(page, messageInbox)
    return response.status(200).json(messages)
  }
}
