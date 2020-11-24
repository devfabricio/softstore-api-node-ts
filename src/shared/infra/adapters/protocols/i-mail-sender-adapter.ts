import ISendEmailDTO from '@shared/infra/adapters/dtos/i-send-email-dto'

export default interface IMailSenderAdapter {
  send(data: ISendEmailDTO): Promise<void>
}
