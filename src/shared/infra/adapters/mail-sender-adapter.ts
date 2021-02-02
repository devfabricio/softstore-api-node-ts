import nodemailer, { Transporter } from 'nodemailer'
import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'
import ISendEmailDTO from '@shared/infra/adapters/dtos/i-send-email-dto'
import IMailTemplateAdapter from '@shared/infra/adapters/protocols/i-mail-template-adapter'

export default class MailSenderAdapter implements IMailSenderAdapter {
  constructor (
    private readonly mailTemplateAdapter: IMailTemplateAdapter) {}

  async send ({ to, from, subject, templateData }: ISendEmailDTO): Promise<void> {
    const client = await this.getClient()
    const message = await client.sendMail({
      from: {
        name: from?.name || 'Equipe Saboreio',
        address: from?.email || 'contato@saboreio.com.br'
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      html: await this.mailTemplateAdapter.parse(templateData)
    })
  }

  private async getClient (): Promise<Transporter> {
    const account = await nodemailer.createTestAccount()
    const client = await nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      }
    })
    return await client
  }
}
