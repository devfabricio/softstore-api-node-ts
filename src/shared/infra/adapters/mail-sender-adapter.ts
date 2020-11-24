import nodemailer, { Transporter } from 'nodemailer'
import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'

export default class MailSenderAdapter implements IMailSenderAdapter {
  async send (to: string, body: string): Promise<void> {
    const client = await this.getClient()
    const message = await client.sendMail({
      from: 'Saboreio <contato@saboreio.com.br>',
      to,
      subject: 'Recuperação de senha',
      text: body
    })
    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
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
