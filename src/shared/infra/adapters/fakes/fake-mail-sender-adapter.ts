import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'

interface IMessage {
  to: string
  body: string
}

export default class FakeMailSenderAdapter implements IMailSenderAdapter {
  private readonly messages: IMessage[] = []
  async send (to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body
    })
  }
}
