import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'

export class MailSenderAdapter implements IMailSenderAdapter {
  async send (to: string, body: string): Promise<void> {}
}
