import nodemailer, { Transporter } from 'nodemailer'
import IMailSenderAdapter from '@shared/infra/adapters/protocols/i-mail-sender-adapter'

export default class MailSenderAdapter implements IMailSenderAdapter {
  private client: Transporter

  constructor () {
    nodemailer.createTestAccount()
      .then(account => {
        this.client = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass
          }
        })
      })
      .catch(error => console.log(error))
  }

  async send (to: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      from: 'Saboreio <contato@saboreio.com.br>',
      to,
      subject: 'Recuperação de senha',
      text: body
    })
    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
  }
}
