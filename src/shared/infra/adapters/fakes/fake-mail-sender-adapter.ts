import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'
import ISendEmailDTO from '@shared/infra/adapters/dtos/i-send-email-dto'

export default class FakeMailSenderAdapter implements IMailSenderAdapter {
  private readonly messages: ISendEmailDTO[] = []
  async send (message: ISendEmailDTO): Promise<void> {
    this.messages.push(message)
  }
}
